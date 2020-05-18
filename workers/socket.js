const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(4000);

io.on('connection', (socket) => {
    console.log('User connected');
});

module.exports = io;