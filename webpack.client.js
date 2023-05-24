const path = require('path');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico'],
    }),
  ],
};
module.exports = merge(baseConfig, clientConfig);
