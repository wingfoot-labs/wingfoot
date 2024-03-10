import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.sa?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};

export default config;
