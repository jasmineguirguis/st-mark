var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var jwt = require('jsonwebtoken');

require('./mongoose/mongoose.config'); // database connection

var routes = require('./api/index.route');
var users = require('./api/user.route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'web', 'public'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'web', 'public')));

require('./passport/passport.config'); // config passport
app.use(passport.initialize());
app.use(passport.session());

app.use(require('connect-livereload')({
    port: process.env.PORT || '3000'
  })); // reload the page with gulp

app.use('/', routes);
app.use('/user', users);

app.use(function(){
  jwt.verify(token, config.token.secret, function(err, decoded) {
    console.log(decoded);
  });
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).send({ message: err.message, error: err });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send({ message: err.message, error: {} });
});


module.exports = app;