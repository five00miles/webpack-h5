const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const APP = require('./../app.config')
const projectPath = path.resolve(__dirname, '../src')

// 静态资源管理
let assetsConfig = Object.assign({
  limit: 5 * 1024,
  publicPath: '',
  outputPath: ''
}, APP.assets || {});

let webpackConfig = {
  entry: {},
  output: {
    filename: `js/[name]_v[hash:4].js`,
    path: path.resolve('dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name]_v[hash:4].css`
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        include: projectPath,
        use: {
          loader: 'url-loader',
          options: {
            limit: assetsConfig.limit,
            outputPath: assetsConfig.outputPath + 'images',
            name: `[name]_v[hash:4].[ext]`,
            publicPath: assetsConfig.publicPath + 'images',
            esModule: false,
          },
        }
      },
      {
        test: /\.(woff)|(WOFF)|(svg)|(SVG)|(eot)|(EOT)|(ttf)|(TTF)$/,
        include: projectPath,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: assetsConfig.outputPath + 'font',
            name: `[name]_v[hash:4].[ext]`,
            publicPath: assetsConfig.publicPath + 'font',
            esModule: false,
          }
        }]
      },
      {
        test: /\.css$/,
        include: projectPath,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          }
        }, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../',
          }
        }, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        include: projectPath,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { 'legacy': true }],
              ['@babel/plugin-proposal-class-properties', { 'loose': true }],
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.html$/,
        include: projectPath,
        use: 'html-withimg-loader'
      },
    ]
  }
}

APP.pages.map(page => {
  webpackConfig.entry[page.name] = `./src/${page.entry}`
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    template: './src/' + page.html,
    filename: page.name + '.html',
    chunks: [page.name],
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true
    }
  }))
})

// 全局引用变量
if (APP.expose) {
  APP.expose.map(node => {
    webpackConfig.module.rules.push({
      test: require.resolve(node.module_name),
      use: node.name.map(name => {
        return { loader: 'expose-loader', options: name }
      })
    })
  })
}

// 设置打包路径
if (APP.outputPath) {
  webpackConfig.output.path = path.resolve(APP.outputPath)
}

module.exports = webpackConfig