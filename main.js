var buttonAddMsg = document.querySelector('.button-form');
var buttonSubmitMsg = document.querySelector('.submit');
var buttonReceive = document.querySelector('.button-msg');
var form = document.querySelector('.add-msg-form');
var formTypeInput = document.querySelector('#types');
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
    return 1;
  } else if (radioMantra.checked) {
    return 2;
  }
}

function displayMsg() {
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];
  var randomMantra = mantra[getRandomIndex(mantra)];
  var type = typeOfMsg();
  console.log(type)
  
  if (type === 1) {
    message.innerHTML = randomAffirmation;
  } else if (type === 2 ) {
    message.innerHTML = randomMantra;
  } else {
    return;
  }
  show(message);
  hide(icon);
  hide(form);
}

function addForm() {
  show(form);
  show(buttonSubmitMsg)
  hide(icon);
  hide(message);
  hide(buttonAddMsg)
}

function displayUserMsg() {
  // var type = formTypeInputrm.value;
  var newMsg = formMsgInput.value;
  var validatation = validate();
  hide(icon)
  if (validatation) {
    message.innerHTML = newMsg;
    hide(form);
    show(message);
  } 
}

function validate() {
  var confirm = false;

  if (formMsgInput.value !== "" &&
  formTypeInput.value !== "") {
    confirm = true;
  }
  return confirm;
}

function show(element) {
  element.classList.remove('visibility-hidden');
}

function hide(element) {
  element.classList.add('visibility-hidden');
}

 