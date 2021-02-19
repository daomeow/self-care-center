var buttonAddMsg = document.querySelector('.button-form');
var buttonSubmitMsg = document.querySelector('.submit');
var buttonReceive = document.querySelector('.button-msg');
var form = document.querySelector('.add-msg-form');
var formTypeInput = document.querySelector('.msg-type');
var formMsgInput = document.querySelector('.user-msg');
var icon = document.querySelector('.icon');
var message = document.querySelector('.message');
var radioAffirmation = document.querySelector('#affirmation');
var radioMantra = document.querySelector('#mantra');

// EVENT LISTENERS
buttonReceive.addEventListener('click', function(event) {
  displayMsg();
  event.preventDefault();
});

buttonAddMsg.addEventListener('click', function(event) {
  addForm();
  event.preventDefault();
});

buttonSubmitMsg.addEventListener('click', function(event) {
  displayUserMsg();
  event.preventDefault();
});

// FUNCTIONS 
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function typeOfMsg() {
  if (radioAffirmation.checked) {
    return true;
  } else if (radioMantra.checked) {
    return false;
  }
}


function displayMsg() {
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];
  var randomMantra = mantra[getRandomIndex(mantra)];
  var type = typeOfMsg();
  show(message);
  hide(icon);
  hide(form);
  
  if (type) {
    message.innerHTML = randomAffirmation;
  } else if (!type) {
     message.innerHTML = randomMantra;
  }
}

function addForm() {
  show(form);
  hide(icon);
  hide(message);
}

function displayUserMsg() {
  // var type = formTypeInputrm.value;
  var newMsg = formMsgInput.value;
  // console.log(newMsg)
  hide(form);
  hide(icon)
  show(message);
  
  message.innerHTML = newMsg;

}

function show(element) {
  element.classList.remove('visibility-hidden');
}

function hide(element) {
  element.classList.add('visibility-hidden');
}

 