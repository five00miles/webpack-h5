/**
 * api返回格式
 * {
 *    error_code:'00000',
 *    error_message:'',
 *    user_tip:'',
 *    data:{}
 * }
 */

import $ from 'jquery'
const baseApiUrl = process.env.BASE_API
console.log('baseApiUrl', process);

export function apiGetUser() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: baseApiUrl + '/user',
      data: {},
      success: function(res) {
        resolve(res)
      },
      error: function(error) {
        reject(error)
      }
    })
  })
}
