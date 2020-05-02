// Imports
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');
// const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
const controller = require('../controllers');

const indexRouter = require('./routes/');
const { db_url } = require('./config');
const 

// App Setup
const app = express();
// app.use(helmet());
// app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

// DB Connection
mongoose.Promise = global.Promise;
const mongoDB = db_url;
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'SheetsRepo',
  })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.log('Cannot connect to the database', err);
    process.exit();
  });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
// app.use('/api', indexRouter);
const whitelist = ['https://nostalgic-pasteur-f4a6fb.netlify.app'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not Allowed by CORS'));
    }
  },
};

app.get('/api/sheets', cors(corsOptions), controller.getSheets);
app.get('/api/sheet', cors(corsOptions), controller.getSheet);

// 404 Handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error Handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
});

module.exports = app;
