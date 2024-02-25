const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    server: {
      type: 'https',
      options: {
        key: '/Users/timchang/Documents/https-stuff/wingfoot/dev/server.key',
        cert: '/Users/timchang/Documents/https-stuff/wingfoot/dev/server.crt',
      },
    },
    compress: true,
    port: 3000,
    proxy: [
      {
        context: '/api',
        target: 'https://localhost:5000',
        secure: true,
        pathRewrite: { '^/api': '' },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Add this plugin
  ],
});
