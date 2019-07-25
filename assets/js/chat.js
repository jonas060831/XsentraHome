//Make Connection
//ec2 http://54.215.128.90:9000
var socket = io.connect('http://54.215.128.90:9000');

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    button = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback'),
    imageURL = document.getElementById('profilePicture').src;

//Emit events
// send button
button.addEventListener('click', function(){
  socket.emit('chat',{

      message: message.value,
      handle: handle.innerHTML
  });
  message.value = null;
  message.focus();
})
// enter key
message.addEventListener('keyup', function(event){

  if (event.keyCode === 13) {
    event.preventDefault();

    socket.emit('chat',{

        message: message.value,
        handle: handle.innerHTML
    });
    message.value = null;
    message.focus();
  }
})


//Listen for events
socket.on('chat', function(data){

  feedback.innerHTML = "";

  var sent = new Audio('/assets/media/sounds/haptics/your-turn.ogg');

  if (data.handle == "Jonas") {
    output.innerHTML += '<p><strong style="color:rgb(255, 0, 35)">' + data.handle + '</strong>' + ':&nbsp;' + data.message + '</p>';
    sent.play();
  }else if(data.handle == "Niño"){
    output.innerHTML += '<p><strong style="color:rgb(3, 186, 254)">' + data.handle + '</strong>' + ':&nbsp;' + data.message + '</p>';
    sent.play();
  }else if(data.handle == "Pich"){
    output.innerHTML += '<p><strong style="color:rgb(66, 249, 2)">' + data.handle + '</strong>' + ':&nbsp;' + data.message + '</p>';
    sent.play();
  }else if(data.handle == "Carlos"){
    output.innerHTML += '<p><strong style="color:rgb(255, 122, 0)">' + data.handle + '</strong>' + ':&nbsp;' + data.message + '</p>';
    sent.play();
  }
});

//when typing
message.addEventListener('keyup', function(){

    if (message.value) {
      socket.emit('typing',{
         handle: handle.innerHTML,
         userimageURL : String("/assets/media/images/pp/" + handle.innerHTML + ".jpg")
      });
    }else {
      socket.emit('typing', null);
    }

});

socket.on('typing', function(data){
  if (data) {
    feedback.innerHTML = '<p><img id="userMessageIndicator" src="' + data.userimageURL + '" > <img id="typingIndicator" src="/assets/media/images/typing.gif"/><em>';
  }else {
    feedback.innerHTML = '';
  }
});
