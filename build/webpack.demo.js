const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 静态资源管理

let webpackConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    contentBase: './dist',
  },
  entry: {
    index: './demo/index.js'
  },
  output: {
    filename: `index.js`,
    path: path.resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: 'index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
}



module.exports = webpackConfig