// import { parse } from 'node-html-parser';
const axios = require('axios');

export const loadPage = async url => {
  if (url) {
    let res = await axios
      .get('/loadPage', {
        params: {
          siteUrl: url
        }
      })
      .catch(err => console.log(err.response));
    return res.data;
  }
};
