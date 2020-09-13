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

$.ajaxSetup({
  dataType: "json",
  cache: false,
  headers: {
  },
  xhrFields: {
    withCredentials: true
  },
  dataFilter: function (data) {
    console.log('dataFilter', data);
  },
  success: function (data) {
    console.log('success', data);
  },
  complete: function (xhr) {
    console.log('complete', xhr);
    //token过期，则跳转到登录页面
    if (xhr.responseJSON.code == 401) {
      // parent.location.href = baseURL + 'login.html';
    }
  }
});
