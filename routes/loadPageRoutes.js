const router = require('express').Router();
const puppeteer = require('puppeteer');

// All routes other than '/' route will be directed to amazon
router.route('/gp/*').get((req, res) => {
  res.redirect('http://www.amazon.sg' + req.url);
});

router.route('/ap/*').get((req, res) => {
  res.redirect('http://www.amazon.sg' + req.url);
});

router.route('/loadPage').get(async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(req.query.siteUrl);
  // Processing page data
  const dataObj = {};
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

  browser.close();
  res.json(dataObj);
});

module.exports = router;
