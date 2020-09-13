let { smart } = require('webpack-merge')
const webpackBase = require('./webpack.base.js')
const webpack = require('webpack')

module.exports = smart(webpackBase, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      IS_WEBPACK_DEV: 'true'
    }),
    // new webpack.NamedModulesPlugin(),//打印热更新的模块路径
    // new webpack.HotModuleReplacementPlugin()//热更新插件
  ]
})