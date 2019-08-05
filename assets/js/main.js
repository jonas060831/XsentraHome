const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");
const chatboxContainer = document.querySelector(".chatbox-container");
//show full page menu when using tablet and mobile
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle("open");
});

var button = document.getElementById('send');

function Send(){
  var message = document.getElementById('message'),
  button = document.getElementById('send');
  button.style.background = 'rgb(37, 187, 93)';
  if (message.value) {
      button.disabled = false;
  }else{
    button.disabled = true;
    button.style.background = 'rgb(145, 145, 145)';
  }
}

function clearAfterSend(){
  var message = document.getElementById('message');
}

function checkForUser() {

  var name = document.getElementById('handle'),pp = document.getElementById('profilePicture');

      if (name.innerHTML == 'Name') {
        // ask the last digit of social and query the info

        var ss = prompt("Enter Your Name:", "");
          if (ss == null || ss == "") {
            //keep asking
        }else {
          if (ss === "2121") {
            name.innerHTML = 'Jonas'
            pp.src = "/assets/media/images/pp/Jonas.jpg"

          }else if(ss === "6773"){
            name.innerHTML = 'Niño'
            pp.src = "/assets/media/images/pp/Niño.jpg"
          }else if(ss === "3749"){
            name.innerHTML = 'Pich'
            pp.src = "/assets/media/images/pp/Pich.jpg"
          }else if(ss === "1121"){
            name.innerHTML = 'Carlos'
            pp.src = "/assets/media/images/pp/Carlos.jpg"
          }else {
            name.innerHTML = ss
            pp.src = '/assets/media/images/temp.png'
          }
        }
      }
}

function openChatBox(){
  chatboxContainer.classList.toggle("open");
}
