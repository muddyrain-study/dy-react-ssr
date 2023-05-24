const path = require('path');
/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  mode: 'development',
  watch: true,
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
