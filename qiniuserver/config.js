/*
七牛云配置
*/
const qiniu = require('qiniu')

// 创建上传凭证
const accessKey = '2G-eoKgbrgfuzj-TZjf0NX-PqFIDB44ZAFP_5osW'
const secretKey = 'EYnMWoGcnbltZi5UjVCVEtRvUsu95Xwepal-74WA'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'img1yy',
  expires: 7200
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

module.exports = {
  uploadToken
}

