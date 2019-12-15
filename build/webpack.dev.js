let { smart } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackBase = require('./webpack.base.js')
const webpack = require('webpack')
const APP = require('../app.config.js')

module.exports = smart(webpackBase, {
  mode: 'development',
  devServer: {
    port: 8080,
    progress: true,
    contentBase: './build',
    compress: true,
    // 代理
    proxy: APP.proxy ? APP.proxy : {}
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: 'true'
    })
  ]
})