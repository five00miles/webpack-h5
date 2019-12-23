require('@babel/polyfill')
require('./../../common/css/reset.css')
// swiper
import Swiper from 'swiper'
import 'swiper/swiper.scss'
//  lodash
import _ from 'lodash'
// mathjs
import { round, e } from 'mathjs'
// moment
import moment from 'moment'
moment.locale('zh-cn')

// licia
import { random, md5 } from 'licia'

require('./index.scss')
require('./loading.scss')

let demoSwiper = new Swiper('.swiper-container', {})

let a = _.chunk(['a', 'b', 'c', 'd'], 2)
console.log('a', a)

console.log('aa', _.now());

let _math = round(e, 3)
console.log('_math', _math)

let _time = moment().format();
console.log('_time', _time)

let _uuid = md5('licia')
console.log('_uuid', _uuid)
