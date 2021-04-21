var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://localhost:27017/yyang')

var articleSchema = new mongoose.Schema({
  papertime: {
    type: Date
  },
  title: {
    type: String
  },
  school: {
    type: String
  },
  papername: {
    type: String
  }

})

var Models = {

  Article: mongoose.model('Article', articleSchema)
}

module.exports = Models
module.exports = (app) => {
  const mongoose = require('mongoose')

  mongoose.connect('mongodb://localhost:27017/mypaper', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
}
