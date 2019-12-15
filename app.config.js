let projectConfig = {
  pages: [
    {
      name: 'index',
      html: 'pages/index/index.html',
      entry: 'pages/index/index.js'
    },
    {
      name: 'other',
      html: 'pages/other/other.html',
      entry: 'pages/other/other.js'
    }
  ],
  expose: [
    {
      module_name: 'jquery',// 模块名
      name: ['jQuery', '$'],// 变量名
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
    // 构建资源输出路径（用作cdn）默认为空
    publicPath: ''
  },
  drop_console: false,//生产环境删除console
}

// 如果使用cdn，则生成cdn文件夹供上传
if (projectConfig.assets.publicPath != '') {
  projectConfig.assets.outputPath = 'cdn/'
}

module.exports = projectConfig