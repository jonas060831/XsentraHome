//Make Connection
//ec2 http://54.215.128.90:9000
var socket = io.connect('http://54.215.128.90:9000') || io.connect('localhost:9000');

var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    button = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback'),
    imageURL = document.getElementById('profilePicture').src,
    chatWindow = document.getElementById('chat-window');

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
    chatWindow.scrollBy(0,10000);
  }
})

//Listen for events display data

socket.on('chat', function(data){

  feedback.innerHTML = "";

  if (data.handle == "Jonas") {
    output.innerHTML += '<p><img id="userMessageIndicator" src="/assets/media/images/pp/Jonas.jpg" /><strong style="color:rgb(255, 0, 35)">' + data.handle + '</strong>' + ':&nbsp;' + data.message + '</p>';
    chatWindow.scrollBy(0,10000);
  }else if(data.handle == "Niño"){
    output.innerHTML += '<p><img id="userMessageIndicator" src="/assets/media/images/pp/Niño.jpg" /><strong style="color:rgb(3, 186, 254)">' + data.handle + '</strong>' + ':&nbsp;' + data.message + '</p>';
    chatWindow.scrollBy(0,10000);
  }else if(data.handle == "Pich"){
    output.innerHTML += '<p><img id="userMessageIndicator" src="/assets/media/images/pp/Pich.jpg" /><strong style="color:rgb(66, 249, 2)">' + data.handle + '</strong>' + ':&nbsp;' + data.message + '</p>';
    chatWindow.scrollBy(0,10000);
  }else if(data.handle == "Carlos"){
    output.innerHTML += '<p><img id="userMessageIndicator" src="/assets/media/images/pp/Carlos.jpg" /><strong style="color:rgb(255, 122, 0)">' + data.handle + '</strong>' + ':&nbsp;' + data.message + '</p>';
    chatWindow.scrollBy(0,10000);
  } else if(data.handle){
    output.innerHTML += '<p><img id="userMessageIndicator" src="/assets/media/images/temp.png" /><strong style="color:rgb(235, 0, 255)">' + data.handle + '</strong>' + ':&nbsp;' + data.message + '</p>';
    chatWindow.scrollBy(0,10000);
  }
});
//when typing
message.addEventListener('keyup', function(){

if (message.value) {
  if (handle.innerHTML == "Jonas" || handle.innerHTML == "Niño" || handle.innerHTML == "Pich" || handle.innerHTML == "Carlos") {
    socket.emit('typing',{

         handle: handle.innerHTML,
         userimageURL : String("/assets/media/images/pp/" + handle.innerHTML + ".jpg")
    });
  }else if (handle.innerHTML != "Jonas" || handle.innerHTML != "Niño" || handle.innerHTML != "Pich" || handle.innerHTML != "Carlos" && message.value) {
    socket.emit('typing',{

         handle: handle.innerHTML,
         userimageURL : String("/assets/media/images/temp.png")
    });
  }
}else{
      socket.emit('typing', null);
    }
});

socket.on('typing', function(data){
  if (data) {
    feedback.innerHTML = '<p><img id="userMessageIndicator" src="' + data.userimageURL + '" > <img id="typingIndicator" src="/assets/media/images/typing.gif"/><em>';
    chatWindow.scrollBy(0,10000);
  }else {
    feedback.innerHTML = '';
  }
});
