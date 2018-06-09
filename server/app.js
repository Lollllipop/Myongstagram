var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var OAuthServer = require('express-oauth-server');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var tokenRouter = require('./routes/token');
// var apiRouter = require('./routes/api');

var oauthModel = require('./utils/oauth');

var app = express();


app.oauth = new OAuthServer({
  model: oauthModel
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

// route
app.use('/', indexRouter);
app.use('/user', userRouter); // 회원가입
app.use('/token', tokenRouter(app)); // 로그인 (토큰 발행)
// app.use('/api', app.oauth.authenticate(), apiRouter); // 로그인 후 서버의 api 데이터에 접근시에는 인증 필요!

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
