require('dotenv').config()

var express = require('express');

var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var charactersRouter = require('./routes/characters');

const app = require('express')();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/characters', charactersRouter);


var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', () => {
    console.log('a user is connected')
})

io.on('updateAll', () => {
    console.log('update request');
    io.emit('update', { status: 'Added', id: req.body._id });
})

module.exports = app;
