// Imports
const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('mongoose')

const indexRouter = require('./routes')
const { corsOptions, dbURL } = require('./config')

// App Setup
const app = express()
app.use(helmet())
app.use(cors(corsOptions))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(compression())

// DB Connection
mongoose.Promise = global.Promise
const mongoDB = dbURL
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SheetsRepo',
  })
  .then(() => {
    console.log('Connected to the database')
  })
  .catch((err) => {
    console.log('Cannot connect to the database', err)
    process.exit()
  })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Router
if (process.env.NODE_ENV === 'production') {
  app.use('/', indexRouter)
} else {
  app.use('/api', indexRouter)
}

// 404 Handler
app.use((req, res, next) => {
  next(createError(404))
})

// Error Handler
app.use((err, req, res) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
})

module.exports = app
