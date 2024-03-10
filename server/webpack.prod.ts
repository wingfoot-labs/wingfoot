import { merge } from 'webpack-merge';
import config from './webpack.common';
import { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

const prodConfig: Configuration = merge(config, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});

export default prodConfig;
