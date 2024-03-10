import { merge } from 'webpack-merge';
import config from './webpack.common';
import webpack from 'webpack';
import { Configuration } from 'webpack';

const devConfig: Configuration = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    server: {
      type: 'https',
      options: {
        key: './ssl/server.key',
        cert: './ssl/server.crt',
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

export default devConfig;
