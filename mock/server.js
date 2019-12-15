const express = require('express')

let app = express()

app.get('/user', (req, res) => {
  res.json({
    name: 'apiname'
  })
})

app.listen(3000)