var socket = io.connect("http://localhost:3000");
var messages = document.getElementById("messages");
var message = document.getElementById("m");
var btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value
    });
});

socket.on('chat', function(data){
    console.log(data.message);
    messages.innerHTML += '<li><p>'+data.message+'</p></li>';
    message.value = '';
});