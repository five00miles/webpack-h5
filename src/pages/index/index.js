import $ from 'jquery'
import { apiGetUser } from '@/api/demo.js'
require('@/common/css/reset.css')
require('./index.scss')
// $('.div1').css({ width: lib.flexible.rem2px(7.5) })

console.log(`jquery版本 = ${$.fn.jquery}`)



apiGetUser().then(res => {
  console.log('res11', res)
  // $('.div1').css({ width: lib.flexible.rem2px(7.5), 'background-image': `url(${require(`@/images/pic${res.name}.png`)})`, 'background-size': 'cover', 'background-position': 'center' })
})


let promises = [Promise.resolve('Hello'), Promise.reject('err reason')];
Promise.allSettled(promises).then(res => {
  let results = res
  console.log('res', res)
  // 过滤出成功的请求
  let successfulPromises = results.filter(p => p.status === 'fulfilled');

  // 过滤出失败的请求，并输出原因
  let errors = results
    .filter(p => p.status === 'rejected')
    .map(p => p.reason);
}).catch(err => console.log('err', err))



$('.loading').fadeIn()

setTimeout(function () {
  $('.loading').fadeOut()
}, 2000)


let p1 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(1)
    }, 3000)
  })
}
let p2 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(2)
    }, 4000)
  })
}
let p3 = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(3)
    }, 5000)
  })
}

let time = 0;
// setInterval(() => {
//   time++
//   console.log(time)
// }, 1000);
// p1().then(res => {
//   console.log('res=', res)
//   return p2()
// }).then(res => {
//   console.log('res=', res)
//   return p3()
// }).then(res => {
//   console.log('res=', res)
// })
