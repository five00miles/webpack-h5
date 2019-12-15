let { smart } = require('webpack-merge')
const webpackBase = require('./webpack.base.js')
const webpack = require('webpack')
const APP = require('../app.config.js')

module.exports = smart(webpackBase, {
  mode: 'development',
  devServer: {
    hot: true,
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
    }),
    new webpack.NamedModulesPlugin(),//打印热更新的模块路径
    new webpack.HotModuleReplacementPlugin()//热更新插件
  ]
})