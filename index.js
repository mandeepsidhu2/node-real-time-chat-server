const express = require('express')
const app = express();

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});

io.sockets.on('connection', function(socket) {

    console.log('user connected');
    socket.on('new-message', function(message) {
        console.log("on node server ,message: "+message)
        io.emit('recieve-message',message);
    })


});