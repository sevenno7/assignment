const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader',],
        exclude: /node_modules/
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ],
  }
};