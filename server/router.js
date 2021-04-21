// module.exports = (app) => {
//   const express = require('express')

//   app.get('/', async(req, res) => {
//     res.send('index')
//   })
//   // 新增文章
//   app.post('/api/articles', async(req, res) => {
//     console.log(req)
//     const article = await Article.create(req.body)

//     res.send(article)
//   })

//   // 文章列表
//   app.get('/api/articles', async(req, res) => {
//     const articles = await Article.find()

//     res.send(articles)
//   })

//   // 删除文章
//   app.delete('/api/articles/:id', async(req, res) => {
//     await Article.findByIdAndDelete(req.params.id)

//     res.send({
//       stat: 'ok'
//     })
//   })

//   // 文章详情
//   app.get('/api/articles/:id', async(req, res) => {
//     const article = await Article.findById(req.params.id)

//     res.send(article)
//   })

//   // 修改文章
//   app.put('/api/articles/:id', async(req, res) => {
//     await Article.findByIdAndUpdate(req.params.id, req.body)

//     res.send()
//   })

//   app.use(async(err, req, res, next) => {
//     res.status(err.status || 500).send({ message: err.message })
//   })
// }

