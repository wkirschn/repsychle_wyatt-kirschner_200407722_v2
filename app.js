var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


// For Item Controller for MongoDB

var itemRouter = require('./routes/items')





var app = express();

//Database Connection with MongoDB is needed - try / catch

const mongoose = require('mongoose')
const globals = require('./config/globals')
mongoose.connect(globals.db, {
  useNewUrlParser: true,
      useUnifiedTopology: true
}).then((res) => {
  console.log('Connection to MongoDB')
}).catch (() => {
  console.log('Connection Error')
})



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);    //Note that this pulls out the routes we need!
app.use('/users', usersRouter);
app.use('/items', itemRouter);








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
