const userApi = require('./api/userApi')
// const fs = require('fs')
// const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

// 跨域
app.use(require('cors')())
// 允许处理前端发来的json数据
app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use('/api/user', userApi)

app.listen(3001)
console.log('success listen at port: 3001')
