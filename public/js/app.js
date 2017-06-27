var socket= io();

socket.on('connect',function(){
console.log('Connected to socket io server');
});

socket.on('message',function(message){
var momentTimestamps=moment(message.time);

console.log('New message!');
console.log(message.text);
 jQuery('.messages').append('<p>'+message.text+momentTimestamps.local().format('zz:hh:mm:ss:YYYY')+'<p>');
});



var $form = jQuery('#message-form');

$form.on('submit',function(event){
	event.preventDefault();

	var $message= $form.find('input[name=message]');
	
	socket.emit('message',{
 		text: $message.val()
 	});
  $message.val('');
});