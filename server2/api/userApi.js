var models = require('../db/db')
var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../db/sqlMap')

var conn = mysql.createConnection(models.mysql)

conn.connect()

// var jsonWrite = function(res, ret) {
//   if (typeof ret === 'undefined') {
//     res.send('err')
//   } else {
//     var _json = JSON.parse(JSON.stringify(ret))
//     console.log(_json)
//     res.send(_json)
//   }
// }

// var dateStr = function(str) {
//   return new Date(str.slice(0, 7))
// }

router.post('/Userlogin', (req, res) => {
  var sql_name = $sql.user.select_name
  var params = req.body
  console.log(params)
  if (params.username) {
    sql_name += " where user_telephone ='" + params.username + "'"
    console.log(sql_name)
  }
  conn.query(sql_name, params.name, function(err, result) {
    if (err) {
      console.log(err)
    }

    if (result[0] === undefined) {
      res.send('-1') // 查询不出username，data 返回-1
    } else {
      var resultArray = JSON.parse(JSON.stringify(result))[0]
      console.log(resultArray)
      var userId = resultArray.USER_ID
      var user_password = resultArray.USER_PASSWORD
      console.log(user_password)
      console.log(params.username)
      if (user_password === params.password) {
        //  根据id查询摄像头
        var sql_cam = $sql.camera.select_cam
        sql_cam += " where user ='" + userId + "'"

        conn.query(sql_cam, function(_err, _result) {
          var data = JSON.parse(JSON.stringify(_result))
          console.log(data)
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify(data))
          console.log('登录')
        })
      } else {
        res.send('-1')
      }
    }
  })
})

// // 增加用户接口
// router.post('/addUser', (req, res) => {
//   var sql = $sql.user.add
//   var params = req.body
//   console.log(params)
//   console.log(params.birth)
//   conn.query(sql, [params.name, params.account, params.pass, params.checkPass,
//     params.email, params.phone, params.card, dateStr(params.birth), params.sex], function(err, result) {
//     if (err) {
//       console.log(err)
//     }
//     if (result) {
//       jsonWrite(res, result)
//     }
//   })
// })

// // 查找用户接口
// router.post('/login', (req, res) => {
//   var sql_name = $sql.user.select_name
//   // var sql_password = $sql.user.select_password;
//   var params = req.body
//   if (keywords.name) {
//     sql_name += " where username ='" + keywords.name + "'"
//     console.log(sql_name)
//   }
//   conn.query(sql_name, keywords.name, function(err, result) {
//     if (err) {
//       console.log(err)
//     }
//     // console.log(result);
//     if (result[0] === undefined) {
//       res.send('-1') // 查询不出username，data 返回-1
//     } else {
//       var resultArray = result[0]
//       console.log(resultArray)
//       console.log(keywords)
//       if (resultArray.password === params.password) {
//         jsonWrite(res, result)
//       } else {
//         res.send('0') // username
//       }
//     }
//   })
// })

// // 获取用户信息
// router.get('/getUser', (req, res) => {
//   var sql_name = $sql.user.select_name
//   // var sql_password = $sql.user.select_password;
//   var params = req.body
//   console.log(params)
//   if (params.name) {
//     sql_name += "where username ='" + params.name + "'"
//   }
//   conn.query(sql_name, params.name, function(err, result) {
//     if (err) {
//       console.log(err)
//     }
//     // console.log(result);
//     if (result[0] === undefined) {
//       res.send('-1') // 查询不出username，data 返回-1
//     } else {
//       jsonWrite(res, result)
//     }
//   })
// })

// // 更新用户信息
// router.post('/updateUser', (req, res) => {
//   var sql_update = $sql.user.update_user
//   var params = req.body
//   console.log(params)
//   if (params.id) {
//     sql_update += " email = '" + params.email +
//                         "',phone = '" + params.phone +
//                         "',card = '" + params.card +
//                         "',birth = '" + params.birth +
//                         "',sex = '" + params.sex +
//                         "' where id ='" + params.id + "'"
//   }
//   conn.query(sql_update, params.id, function(err, result) {
//     if (err) {
//       console.log(err)
//     }
//     console.log(result)
//     if (result.affectedRows === undefined) {
//       res.send('更新失败，请联系管理员') // 查询不出username，data 返回-1
//     } else {
//       res.send('ok')
//     }
//   })
// })

// // 更改密码
// router.post('/modifyPassword', (req, res) => {
//   var sql_modify = $sql.user.update_user
//   var params = req.body
//   console.log(params)
//   if (params.id) {
//     sql_modify += " password = '" + params.pass +
//                         "',repeatPass = '" + params.checkPass +
//                         "' where id ='" + params.id + "'"
//   }
//   conn.query(sql_modify, params.id, function(err, result) {
//     if (err) {
//       console.log(err)
//     }
//     // console.log(result);
//     if (result.affectedRows === undefined) {
//       res.send('修改密码失败，请联系管理员') // 查询不出username，data 返回-1
//     } else {
//       res.send('ok')
//     }
//   })
// })

module.exports = router
