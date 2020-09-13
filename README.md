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

### 
[字蜘](http://font-spider.org/)
```
$ npm install font-spider -g
```


### 笔记
```html
  <!-- <link rel="apple-touch-icon" href="./../../images/pic1.png"> -->
  <!-- <link rel="apple-touch-icon-precomposed" href="./../../images/pic1.png" /> -->
  <!-- <link rel="Shortcut Icon" href="./../../images/pic1.png" type="image/x-icon"> -->
```

### 一些库的说明
(1) babel/polyfill 兼容低版本浏览器
(2) @babel/plugin-transform-runtime  @babel/runtime
  1. 提高代码重用性，缩小编译后的代码体积。
  2. 防止污染全局作用域。（启用corejs配置）   babel-polyfill会将Promise等添加成全局变量，污染全局空间。



### 一些第三方库
关于promise
[bluebird](http://bluebirdjs.com/docs/getting-started.html)
[when](https://github.com/cujojs/when)
[bluebird](http://bluebirdjs.com/docs/getting-started.html)