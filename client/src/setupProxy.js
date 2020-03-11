const proxy = require('http-proxy-middleware');
// const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
//   const options = {
//     target: 'https://www.amazon.com', // target host
//     changeOrigin: true, // needed for virtual hosted sites
//     ws: true, // proxy websockets
//     // pathRewrite: {
//     //   '^/api/old-path': '/api/new-path', // rewrite path
//     //   '^/api/remove/path': '/path' // remove base path
//     // },
//     // router: {
//     //   // when request.headers.host == 'dev.localhost:3000',
//     //   // override target 'http://www.example.org' to 'http://localhost:8000'
//     //   'dev.localhost:3000': 'http://localhost:8000'
//     // }
//   };

//   const exampleProxy = createProxyMiddleware(options);

//   app.use('/Lunastryke', exampleProxy);

app.use(
    proxy(['/gp'], {
      target: 'https://www.amazon.com',
      changeOrigin: true,
      pathRewrite: { '^/gp': 'https://www.amazon.com' }
    })
  );

  // testing
  app.use(
    proxy(['/Lunastryke'], {
      target: 'https://www.amazon.com',
      changeOrigin: true,
      ws: true,
      pathRewrite: {'^/Lunastryke' : '/https://www.amazon.com/'}
    })
  );
};
