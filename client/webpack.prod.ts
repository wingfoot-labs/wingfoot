import merge from 'webpack-merge';
import config from './webpack.common';
import TerserPlugin from 'terser-webpack-plugin';
import { Configuration } from 'webpack';

const prodConfig: Configuration = merge(config, {
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css', '.scss'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
});

export default prodConfig;
