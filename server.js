console.log("server is running");

var express = require("express");

var app = express();

// we now choose a port to communicate between the server and the client
var port = 3000;
// to crrate a client connection
// we create the public folder where we put every files we want to share with the client whenhe connect to the server, everything else is private for us
app.use(express.static('public'));
// static means we want to send those files to our public.
var server = app.listen(port);

console.log('http://localhost:'+ port);

// in order to connect together different clients we have to use socket
var socket = require('socket.io');

var io = socket(server);

io.on("connection", newConnection);

function newConnection(socket) {
  console.log(socket.id);
// here we are receiveing the message called mouse that we have sent in the sketch and that says" execute all the code that is contained in the mouse message"
  socket.on('mouse', mouseMessage);

  // callback fucnctiom, in order to received the data
  function mouseMessage(receivedData){
    console.log(receivedData); // this says "print in the terminal the sent data"

    socket.broadcast.emit('mouseBroadcast', receivedData);
  }
}
// then we installed two modulesm socket amd server, then we created a public folder with alla the files that as to be sent ti the public, with inside a normal sketch.
// then we created a variable express and we cereated an app
