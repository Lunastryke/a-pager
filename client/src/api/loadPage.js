// import { parse } from 'node-html-parser';
const axios = require('axios');

export const loadPage = async url => {
  if (url) {
    let res = await axios.get('/loadPage', {
      params: {
        siteUrl: url
      }
    });
    console.log(res.data);
    return res.data;
  }
};
// Takes in raw HTML data and puts it in an object for easy handling
// let processData = data => {
//   var dataObj = {};
//   dataObj.rawHtml = data;
//   const root = parse(data);
//   dataObj.productTitle = root.querySelector('#productTitle').text.trim();
//   const image = root.querySelector('.imgTagWrapper').childNodes[1]
//     .rawAttributes;
//   dataObj.image = { src: image['data-old-hires'], alt: image['alt'] };
//   console.log(root.querySelector('#priceblock_ourprice'));
//   return dataObj;
// };

// export const loadPage = async url => {
//   if (url) {
//     return axios
//       .get(`https://cors-anywhere.herokuapp.com/${url}`)
//       .then(response => {
//         // Handle success in here
//         return processData(response.data);
//       })
//       .catch(error => {
//         // Handle error
//         console.log(`Axios request failed: ${error}`);
//       });
//   }
// };

// const puppeteer = require('puppeteer');

// export const loadPage = async url => {
//   const dataObj = {};
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);

//   const [el] = await page.$x('//*[@id="landingImage"]');
//   const src = await el.getProperty('src');
//   const srcTxt = await src.jsonValue();
//   const alt = await el.getProperty('alt');
//   dataObj.image = { src: srcTxt, alt: alt };
//   const [el2] = await page.$x('//*[@id="productTitle"]');
//   const txt = await el2.getProperty('textContent');
//   const rawTxt = await txt.jsonValue();
//   dataObj.productTitle = rawTxt;
//   console.log(srcTxt, rawTxt);
//   browser.close();
//   return dataObj;
// };
