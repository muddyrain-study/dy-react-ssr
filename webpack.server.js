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
    ],
  },
  // 排除
  // externals: [webpackNodeExternals()],
};
module.exports = merge(baseConfig, serverConfig);
