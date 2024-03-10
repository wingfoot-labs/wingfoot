import nodeExternals from 'webpack-node-externals';
import * as path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};

export default config;
