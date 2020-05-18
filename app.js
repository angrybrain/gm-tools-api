require('dotenv').config()

var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var charactersRouter = require('./routes/characters');

var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/characters', charactersRouter);

module.exports = app;
