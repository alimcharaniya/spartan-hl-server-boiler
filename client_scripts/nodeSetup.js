var gpio = require("rpi-gpio");

//script runs on raspberry pi using NodeJS
//Basic set up and implementation of socket IO on client

//pass in local address on port number
//point server to rpi ip address with port 808 appended
var port = 8080;
var socket = require("socket.io-client")("http://localhost:" + ports);

//start up code
process.on("SIGINT", function(){

});

socket.on("connect", function(){

});
