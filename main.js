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

buttonAddMsg.addEventListener('click', displayForm);

buttonReceive.addEventListener('click', function(event) {
  displayMsg();
  event.preventDefault();
});

buttonSubmitMsg.addEventListener('click', displayUserMsg);

function typeOfMsg() {
  if (radioAffirmation.checked) {
    return 1;
  } else if (radioMantra.checked) {
    return 2;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function displayMsg() {
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];
  var randomMantra = mantra[getRandomIndex(mantra)];
  var type = typeOfMsg();
  
  if (type === 1) {
    message.innerHTML = randomAffirmation;
  } else if (type === 2 ) {
    message.innerHTML = randomMantra;
  } else {
    return;
  }
  hide(buttonSubmitMsg);
  hide(form);
  hide(icon);
  show(buttonAddMsg);
  show(message);
}

function displayForm() {
  hide(buttonAddMsg);
  hide(icon);
  hide(message);
  show(buttonSubmitMsg);
  show(form);
}

function displayUserMsg() {
  var newMsg = formMsgInput.value;
  var validatation = validate();
  
  if (validatation) {
    message.innerHTML = newMsg;
    clearForm();
    hide(buttonSubmitMsg);
    hide(form);
    show(buttonAddMsg);
    show(message);
  } 
  hide(icon);
}

function validate() {
  var confirm = false;

  if (formMsgInput.value !== "" &&
  formTypeInput.value === 'affirmation' ||
  formTypeInput.value === 'mantra') {
    confirm = true;
  }
  return confirm;
}

function clearForm() {
  formMsgInput.value = "";
  formTypeInput.value = "";
}

function hide(element) {
  element.classList.add('visibility-hidden');
}

function show(element) {
  element.classList.remove('visibility-hidden');
}


 