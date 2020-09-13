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
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        include: projectPath,
        use: {
          loader: 'url-loader',
          options: {
            limit: assetsConfig.limit,
            outputPath: assetsConfig.outputPath + 'images',
            name: `[name]_v[hash:4].[ext]`,
            publicPath: assetsConfig.publicPath == '' ? assetsConfig.publicPath : assetsConfig.publicPath + 'images',
            esModule: false,
          },
        }
      },
      {
        test: /\.(woff)|(WOFF)|(svg)|(SVG)|(eot)|(EOT)|(ttf)|(TTF)$/,
        include: projectPath,
        exclude: /node_modules/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: assetsConfig.outputPath + 'font',
            name: `[name]_v[hash:4].[ext]`,
            publicPath: assetsConfig.publicPath == '' ? assetsConfig.publicPath : assetsConfig.publicPath + 'font',
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  browsers: ['defaults', 'not ie <= 7']
                },
                corejs: 2, // 新版本需要指定核⼼库版本 
                useBuiltIns: "usage" // 按需注⼊
              }]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      // {
      //   test: /\.js$/,
      //   loader: 'eslint-loader',
      //   enforce: 'pre',
      //   include: projectPath,
      //   exclude: /plugin|node_modules/
      // },
      {
        test: /\.html$/,
        include: projectPath,
        exclude: /node_modules/,
        use: 'html-withimg-loader'
      },
    ]
  },
  resolve: {
    modules: [path.resolve('node_modules')],
    alias: {
      '@': projectPath
    }
  }
}

APP.pages.map(page => {
  webpackConfig.entry[page.name] = `./src/${page.entry}`
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    template: projectPath + '/' + page.html,
    filename: page.name + '.html',
    chunks: [page.name],
    minify: {
      removeAttributeQuotes: true,
      collapseWhitespace: true
    },
  }))
})

// 设置打包路径
if (APP.outputPath) {
  webpackConfig.output.path = path.resolve(APP.outputPath)
}

module.exports = webpackConfig