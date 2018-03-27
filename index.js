const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

//model
const Websites = require('./models/Websites')
//controller
const websitesController = require('./controllers/websites')

const app = express()
app.use(methodOverride('_method'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

// app.use('/', index)

app.get('/api/websites', function(req, res) {
  Websites.find({}).then(websites => {
    console.log(res.json(websites))
    res.json(websites)
  })
})

app.post('/api/websites', (req, res) => {
  Websites.create(req.body)
    .then(websites => {
      res.json(websites)
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/api/websites/:id', (req, res) => {
  Websites.findById(req.params.id)
    .then(websites => {
      res.json(websites)
    })
    .catch(err => {
      console.log(err)
    })
})

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`Wobbling on port: ${app.get('port')}`)
})

// module.exports = app
