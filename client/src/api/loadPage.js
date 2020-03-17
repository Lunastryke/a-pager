import { parse } from 'node-html-parser';

const axios = require('axios');

// Takes in raw HTML data and puts it in an object for easy handling
let processData = data => {
  var dataObj = {};
  dataObj.rawHtml = data;
  const root = parse(data);
  dataObj.productTitle = root.querySelector('#productTitle').text.trim();
  const image = root.querySelector('.imgTagWrapper').childNodes[1]
    .rawAttributes;
  dataObj.imageSrc = image['data-old-hires'];
  dataObj.imageAlt = image['alt'];
  return dataObj;
};

export const loadPage = async url => {
  if (url) {
    return axios
      .get(`https://cors-anywhere.herokuapp.com/${url}`)
      .then(response => {
        // Handle success in here
        return processData(response.data);
      })
      .catch(error => {
        // Handle error
        console.log(`Axios request failed: ${error}`);
      });
  }
};
