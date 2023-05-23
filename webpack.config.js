const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
/**
 * @type {import("webpack").Configuration}
 */

module.exports = {
  mode: 'development',
  entry: './src/server',
  target: 'node',
  output: {
    filename: 'server.js',
  },
  // 排除
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
