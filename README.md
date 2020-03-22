# a-pager
Hack for Good 2020 repository for Team Skate Gang

A web-application for parsing amazon.com pages to make them more accessible for people with aphasia. This web application was built with the use of ReactJS, Express, Node.js, Puppeteer and SpeakAPI. 

This site is hosted at [https://a-pager.herokuapp.com/](https://a-pager.herokuapp.com/)

Presentation slides and demo video are located in the presentation folder.

This project got to the finals of Hack for Good 2020 held by NUS DSC

## User guide
1. Browse to desired product page on [amazon.com](amazon.com)
   
   ![amazonPage]: (https://github.com/Lunastryke/a-pager/blob/master/img/amazonpage.JPG)
2. Copy URL and paste into A-pager
   
   ![apagerPage]: (https://github.com/Lunastryke/a-pager/blob/master/img/apagerpage.JPG)
3. Page is simplified

   ![concisedPage]: (https://github.com/Lunastryke/a-pager/blob/master/img/concisedpage.JPG)
   

## Quick Start

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```
### Credits and relevant source code reference: 


SpeakAPI source code: https://github.com/bradtraversy/type-n-speak
