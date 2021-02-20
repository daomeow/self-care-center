var buttonAddMsg = document.querySelector('.button-form');
var buttonSubmitMsg = document.querySelector('.submit');
var buttonReceive = document.querySelector('.button-msg');
var buttonLogin = document.querySelector('.login-button');
var form = document.querySelector('.add-msg-form');
var formTypeInput = document.querySelector('#types');
var formMsgInput = document.querySelector('.user-msg');
var errorMsg = document.querySelector('.error-msg');
var errorType = document.querySelector('.error-type');
var icon = document.querySelector('.icon');
var loginName = document.querySelector('.user-name');
var loginPage = document.querySelector('.login-page');
var mainIntro = document.querySelector('.intro');
var mainPage = document.querySelector('.main-page');
var message = document.querySelector('.message');
var radioAffirmation = document.querySelector('#affirmation');
var radioMantra = document.querySelector('#mantra');

buttonLogin.addEventListener('click', function(event) {
  showWelcome();
  event.preventDefault();
});

buttonReceive.addEventListener('click', function(event) {
  displayMsg();
  event.preventDefault();
});

buttonAddMsg.addEventListener('click', displayForm);

buttonSubmitMsg.addEventListener('click', displayUserMsg);

function showWelcome() {
  var name = loginName.value

  if (name !== "") {
    mainIntro.innerHTML = `
    Welcome, ${name}! Learn from yesterday, live for today, hope for tomorrow.
    `
    hide(loginPage);
    show(mainPage);
  }
}

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
  hide(errorType);
  hide(errorMsg);
  show(buttonSubmitMsg);
  show(form);
}

function displayUserMsg() {
  var newMsg = formMsgInput.value;
  var error = displayError();
  
  if (!error) {
    message.innerHTML = newMsg;
    clearForm();
    hide(buttonSubmitMsg);
    hide(form);
    show(buttonAddMsg);
    show(message);
  } 
  hide(icon);
}

function validate(userEntry, warning) {

  if (userEntry === "") {
    show(warning);
    return true;
  } else {
    hide(warning)
    return false;
  }
}   
function displayError() {
  var checkType = validate(formTypeInput.value, errorType);
  var checkMsg = validate(formMsgInput.value, errorMsg);

  if (checkType || checkMsg) {
    return true;
  } else {
    return false;
  }
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


 