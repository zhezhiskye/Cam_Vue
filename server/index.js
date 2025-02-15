const express = require('express')
const mysql = require('mysql')
const app = express()

// 跨域
app.use(require('cors')())
// 允许处理前端发来的json数据
app.use(express.json())

// 创建连接
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'demo_test'
})
db.connect((err) => {
  if (err) throw err
  console.log('连接成功')
})

app.get('/createdb', (req, res) => {
  const sql = 'select * from user'
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      res.send(result)
    }
  })
})

app.listen(3001, () => {
  console.log(`'http://localhost:3001/'`)
})
