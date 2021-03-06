const { smart } = require('webpack-merge')
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack');
const webpackBase = require('./webpack.base.js')
const APP = require('../app.config.js')

module.exports = smart(webpackBase, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        parallel: true, // 开启多进程压缩
        cache: true, // 开启缓存(压缩过的不压缩)
        sourceMap: true,
        terserOptions: {
          compress: {
            drop_console: typeof APP.drop_console == 'boolean' ? APP.drop_console : true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'all',
          minSize: 0,
          minChunks: 2,
        },
        vendor: {
          priority: 1,
          name: 'modules',
          test: /node_modules/,
          chunks: 'all',
          minSize: 0,
          minChunks: 2
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_WEBPACK_DEV: 'false'
    }),
    new WebpackDeepScopeAnalysisPlugin(),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ]
})