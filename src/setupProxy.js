const {createProxyMiddleware }  = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware(
    '/max',
   { 
        target: 'http://119.253.51.11/api',
        changeOrigin:true,
        pathRewrite:{
            '^/max':''
        }
   }
   ));
};