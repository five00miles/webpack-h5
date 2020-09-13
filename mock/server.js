/**
 * api返回格式
 * {
 *    error_code:'00000',
 *    error_message:'',
 *    user_tip:'',
 *    data:{}
 * }
 */
const express = require('express')
const cors = require('cors');

let app = express()

app.use(cors());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
})



app.get('/user', (req, res) => {
  setTimeout(() => {
    res.status(200);
    res.json({
      error_code: '00000',
      error_message: '',
      user_tip: '',
      data: {
        name: 'jack',
        lotteryNum: 1
      }
    })
  }, 1000)
})
app.get('/lottery', (req, res) => {
  setTimeout(() => {
    res.status(200);
    res.json({
      error_code: '00000',
      error_message: '',
      user_tip: '',
      data: {
        name: '10员大将',
      }
    })
  }, 5000);
})

app.listen(3000)
