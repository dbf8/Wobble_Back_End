const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')

const Websites = require('./models/Websites')
const websitesController = require('./controllers/websites')

const app = express()
app.use(methodOverride('_method'))
// uncomment after placing favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

// app.use('/', index)

app.get('/api', function(req, res) {
  Websites.find({}).then(websites => {
    console.log(websites)
    res.json(websites)
  })
})

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`Wobbling on port: ${app.get('port')}`)
})

// module.exports = app
