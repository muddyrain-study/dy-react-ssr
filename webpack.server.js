const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');
const { merge } = require('webpack-merge');
const path = require('path');
/**
 * @type {import("webpack").Configuration}
 */
const serverConfig = {
  entry: './src/server',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportOnlyLocals: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png)|(gif)|(jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[hash:5].[ext]',
              limit: 10 * 1024,
              esModule: false,
              emitFile: false,
            },
          },
        ],
      },
    ],
  },
  // 排除
  // externals: [webpackNodeExternals()],
};
module.exports = merge(baseConfig, serverConfig);
