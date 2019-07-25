
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

        var ss = prompt("Please enter the last four digit of your social:", "1234");
          if (ss == null || ss == "") {
            //keep asking
        }else {
          if (ss === $JONAS_ENV) {
            name.innerHTML = 'Jonas'
            pp.src = "/assets/media/images/pp/Jonas.jpg"

          }else if(ss === $NINO_ENV){
            name.innerHTML = 'Niño'
            pp.src = "/assets/media/images/pp/Niño.jpg"
          }else if(ss === $PICH_ENV){
            name.innerHTML = 'Pich'
            pp.src = "/assets/media/images/pp/Pich.jpg"
          }else if(ss === $CARLOS_ENV){
            name.innerHTML = 'Carlos'
            pp.src = "/assets/media/images/pp/Carlos.jpg"
          }
        }
      }
}
