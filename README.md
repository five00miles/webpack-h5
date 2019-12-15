# webpack-h5

比较适合传统的 jq 框架下的 h5 单页面开发，可以配置多页面，但是不推荐比较重的多页面项目

```
node v10.15.3
```

### 命令

h5 单页面的 webpack 自动化打包

```
$ npm run dev 开发模式，默认地址 http://localhost:8080
$ npm run dist 生产模式，默认地址 /dist
```

### cdn

如果配置了`app.config.js`下的`publicPath`,则 dist 目录下会产出`cdn`文件夹，里面的文件上传至 cdn 即可


### mock数据
```
$ node .\mock\server.js
```