const router = require('express').Router();
const puppeteer = require('puppeteer');

// All routes other than '/' route will be directed to amazon
router.route('/gp/*').get((req, res) => {
  res.redirect('http://www.amazon.com' + req.url);
});

router.route('/ap/*').get((req, res) => {
  res.redirect('http://www.amazon.com' + req.url);
});

router.route('/gp/*').post((req, res) => {
  console.log(req.body);
  res.redirect('http://www.amazon.com' + req.url);
});

router.route('/ap/*').post((req, res) => {
  console.log(req.body);
  res.redirect('http://www.amazon.com' + req.url);
});

router.route('/loadPage').get(async (req, res) => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setRequestInterception(true);

  page.on('request', req => {
    if (
      req.resourceType() == 'stylesheet' ||
      req.resourceType() == 'font' ||
      req.resourceType() == 'image'
    ) {
      req.abort();
    } else {
      req.continue();
    }
  });
  await page.goto(req.query.siteUrl);
  // Processing page data
  const dataObj = {};
  // Site Url
  dataObj.url = req.query.siteUrl;

  // Site html
  let bodyHTML = await page.evaluate(() => document.documentElement.outerHTML);
  dataObj.rawHtml = bodyHTML;

  // Product title
  const [el] = await page.$x('//*[@id="productTitle"]');
  const txt = await el.getProperty('textContent');
  const rawTxt = await txt.jsonValue();
  dataObj.productTitle = rawTxt.trim();

  // Image and Alt
  const [el2] = await page.$x('//*[@id="landingImage"]');
  const src = await el2.getProperty('src');
  const srcTxt = await src.jsonValue();
  const alt = await el2.getProperty('alt');
  const altTxt = await alt.jsonValue();
  dataObj.image = { imgSrc: srcTxt, imgAlt: altTxt };

  // Price
  const [price1] = await page.$x('//*[@id="price_inside_buybox"]');
  const [price2] = await page.$x('//*[@id="priceblock_ourprice"]');
  const [price3] = await page.$x(
    ' //*[@id="buyNewSection"]/div/div/span[1]/span'
  );
  const [price4] = await page.$x(' //*[@id="priceblock_dealprice"]');
  // Compare and return non-null in order of priority (inefficient since can be returned earlier but it works)
  var priceTxt;
  if (price1) {
    const price = await price1.getProperty('textContent');
    priceTxt = await price.jsonValue();
  } else if (price2) {
    const price = await price2.getProperty('textContent');
    priceTxt = await price.jsonValue();
  } else if (price3) {
    const price = await price3.getProperty('textContent');
    priceTxt = await price.jsonValue();
  } else if (price4) {
    const price = await price4.getProperty('textContent');
    priceTxt = await price.jsonValue();
  } else {
    priceTxt = 'No price found';
  }
  dataObj.price = priceTxt;

  // Ratings
  const [el3] = await page.$x('//*[@id="acrPopover"]');
  var ratingValue;
  var reviewCountTxt;
  if (el3) {
    const rating = await el3.getProperty('title');
    const ratingTxt = await rating.jsonValue();
    ratingValue = parseFloat(ratingTxt.split(' ')[0]);
  } else {
    ratingValue = '';
  }
  const [el4] = await page.$x('//*[@id="acrCustomerReviewText"]');
  if (el4) {
    const review = await el4.getProperty('textContent');
    reviewCountTxt = await review.jsonValue();
  } else {
    reviewCountTxt = '';
  }
  dataObj.ratings = { ratingValue: ratingValue, ratingCount: reviewCountTxt };

  // Descriptions split into array entries based on points
  const [el5] = await page.$x('//*[@id="feature-bullets"]/ul');
  var desc;
  if (el5) {
    desc = await el5.$$eval('.a-list-item', nodes =>
      nodes.map(n => n.innerText.trim())
    );
  } else {
    desc = '';
  }
  dataObj.descriptions = desc;

  browser.close();
  res.json(dataObj);
});

module.exports = router;
