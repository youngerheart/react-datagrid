'use strict';

var ExtractTextPlugin = require('extract-text-webpack-plugin')

var cssLoader = 'css-loader?localIdentName=[local]--[hash:base64:5]'

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.styl$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract("style-loader", cssLoader + "!stylus-loader")
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract("style-loader", cssLoader)
  },
  {
    test: /\.png$/,
    exclude: /node_modules/,
    // loader: 'url-loader?mimetype=image/png'
    loader: 'file-loader?name=img/[name]-[hash:6].[ext]'
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&minetype=application/font-woff&name=font/[name]-[hash:6].[ext]'
  },
  {
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader?name=font/[name]-[hash:6].[ext]'
  },
  {
    test: /\.json$/,
    exclude: /node_modules/,
    loader: 'json-loader'
  }
]