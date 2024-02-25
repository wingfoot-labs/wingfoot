const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 3000,
    proxy: [
      {
        '/api': 'http://localhost:5000',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Add this plugin
  ],
});
