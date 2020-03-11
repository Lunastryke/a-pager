const axios = require('axios');

export const loadPage = async url => {
  if (url) {
    return axios
      .get(`https://cors-anywhere.herokuapp.com/${url}`)
      .then(response => {
        // Handle success in here
        return response;
      })
      .catch(error => {
        // Handle error
        console.log(`Axios request failed: ${error}`);
      });
  }
};
