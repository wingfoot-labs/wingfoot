import { merge } from 'webpack-merge';
import config from './webpack.common';
import { Configuration } from 'webpack';

const devConfig: Configuration = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
});

export default devConfig;
