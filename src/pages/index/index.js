import $ from 'jquery'
// require('@babel/polyfill')
require('./../../plugin/swiper/swiper.css')
require('./../../plugin/swiper/swiper.js')
require('./../index/index.scss')


for (let i = 1; i < 3; i++) {
  console.log(require('./../../images/pic' + i + '.png'))
}

$(function () {
  // $('body').html('哈哈哈')
  console.log('哈哈哈', window.$)
})



async function foo() {
  console.log('async working!')
}

async function bar() {
  await foo()
  console.log('after foo')
}

bar()


let fun = () => {
  let a = '测试let1'
  console.log('a', a)
}

fun()

class A {
  constructor() {
    this.a = 1
  }
}

let classA = new A()
console.log('classA', classA.a)

import hotStr from './hot'
console.log('hotStr', hotStr)

if (module.hot) {
  module.hot.accept('./hot', () => {
    let _str = require('./hot')
    console.log(_str.default)
  })
}

$.get('/api/user',function(res){
  console.log('res',res)
})