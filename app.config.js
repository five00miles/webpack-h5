let projectConfig = {
  pages: [
    {
      name: 'index',
      html: 'pages/index/index.html',
      entry: 'pages/index/index.js'
    }
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: { '/api': '' }
    }
  },
  assets: {
    // 不超过5KB的图片转换成base64
    limit: false,
    // 构建资源输出路径（用作cdn）默认为空  http://cdn-link.com/
    publicPath: '',
    outputPath: 'cdn/'
  },
  drop_console: false,//生产环境删除console
}

module.exports = projectConfig