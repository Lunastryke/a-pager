import { parse } from 'node-html-parser';

const axios = require('axios');

// Takes in raw HTML data and puts it in an object for easy handling
let processData = data => {
  var dataObj = {};
  const root = parse(data);
  dataObj.productTitle = root.querySelector('#productTitle').text.trim();
  console.log(JSON.stringify(dataObj));
  console.log(dataObj.productTitle);
  return dataObj;
};

export const loadPage = async url => {
  if (url) {
    return axios
      .get(`https://cors-anywhere.herokuapp.com/${url}`)
      .then(response => {
        // Handle success in here
        const processedData = processData(response.data);
        console.log(processedData);
        return processedData;
      })
      .catch(error => {
        // Handle error
        console.log(`Axios request failed: ${error}`);
      });
  }
};
