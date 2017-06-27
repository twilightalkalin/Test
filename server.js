var PORT = process.env.PORT || 3000
var express= require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var moment = require('moment');
app.use(express.static(__dirname+ '/public'));
var timestamp = moment().format('zz:hh:mm:ss:YYYY');
io.on('connection',function(socket){
console.log('user connected via socket.io');

socket.on('message',function(message){
	console.log('Message Received'+ message.text);
	io.emit('message',message);
	io.emit('message',message.time);
	// put it here too
})



//need to make time stamp property
socket.emit('message',{
	text:"welcome to the chat app",
	time: timestamp
});


});


http.listen(PORT,function(){
	console.log('Server started');
});