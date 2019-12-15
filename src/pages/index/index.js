import $ from 'jquery'
require('./../../plugin/swiper/swiper.css')
require('./../../plugin/swiper/swiper.js')
require('./../index/index.scss')

for(let i = 1;i<3;i++) {
  console.log(require('./../../images/pic'+ i +'.png'))
}

$(function(){
  $('body').html('哈哈哈')
  console.log('哈哈哈',window.$)
})
