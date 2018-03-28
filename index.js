const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

//model
const Websites = require('./models/Websites')
const Comments = require('./models/Websites')

const app = express()
app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

//get
app.get('/api/websites', function(req, res) {
  Websites.find({}).then(websites => {
    console.log(res.json(websites))
    res.json(websites)
  })
})
//add!
app.post('/api/websites', (req, res) => {
  Websites.create(req.body)
    .then(websites => {
      res.json(websites)
    })
    .catch(err => {
      console.log(err)
    })
})
//get
app.get('/api/websites/:id', (req, res) => {
  Websites.findById(req.params.id)
    .then(websites => {
      res.json(websites)
    })
    .catch(err => {
      console.log(err)
    })
})
//delete!
app.delete('/api/websites/:id', (req, res) => {
  Websites.findOneAndRemove({ _id: req.params.id }).then(websites => {
    Websites.find({}).then(websites => {
      res.json(websites)
    })
  })
})

//put // does not work
// app.put('/api/websites/:id', (req, res) => {
//   Websites.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     new: true
//   }).then(websites => {
//     Websites.find({}).then(websites => {
//       res.json(websites)
//     })
//   })
// })

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`Wobbling on port: ${app.get('port')}`)
})

// module.exports = app
