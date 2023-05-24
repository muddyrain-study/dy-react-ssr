const path = require('path');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/**
 * @type {import("webpack").Configuration}
 */
const clientConfig = {
  devtool: 'source-map',
  entry: './src/client',
  output: {
    filename: 'js/bundle.[hash:5].js',
    path: path.resolve(__dirname, './public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?modules',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bundle.[hash:5].css',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico'],
    }),
  ],
};
module.exports = merge(baseConfig, clientConfig);
