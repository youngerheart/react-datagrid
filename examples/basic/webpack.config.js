'use strict';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.jsx',
  output: {
    publicPath: '/assets'
  },
  module: {
    loaders: require('./loaders.config')
  },
  resolve: {
    extensions: [
      '', '.js', '.jsx', '.json'
    ]
  },
  plugins: [
    new ExtractTextPlugin("index.css")
  ],
  devServer: {
    publicPath: '/assets',
    port: 8080
  }
}