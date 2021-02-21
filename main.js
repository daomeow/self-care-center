var addMessageButton = document.querySelector('.button-form');
var clearButton = document.querySelector('.button-clear');
var errorMessage = document.querySelector('.error-msg');
var errorType = document.querySelector('.error-type');
var formTypeInput = document.querySelector('#types');
var icon = document.querySelector('.icon');
var loginButton = document.querySelector('.login-button');
var loginName = document.querySelector('.user-name');
var loginPage = document.querySelector('.login-page');
var mainIntro = document.querySelector('.intro');
var mainPage = document.querySelector('.main-page');
var message = document.querySelector('.message');
var messageFormInput = document.querySelector('.user-msg');
var radioAffirmation = document.querySelector('#affirmation');
var radioMantra = document.querySelector('#mantra');
var receiveMessageButton = document.querySelector('.button-msg');
var submitMessageButton = document.querySelector('.submit');
var userForm = document.querySelector('.add-msg-form');

loginButton.addEventListener('click', function(event) {
  showWelcome();
  event.preventDefault();
});
receiveMessageButton.addEventListener('click', function(event) {
  displayMsg();
  event.preventDefault();
});
addMessageButton.addEventListener('click', displayForm);
submitMessageButton.addEventListener('click', displayUserMsg);
clearButton.addEventListener('click', clearMsg);

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
  } 
  hide(submitMessageButton);
  hide(userForm);
  hide(icon);
  show(addMessageButton);
  show(message);
}

function displayForm() {
  hide(addMessageButton);
  hide(icon);
  hide(message);
  hide(errorType);
  hide(errorMessage
  );
  hide (clearButton);
  show(submitMessageButton);
  show(userForm);
}

function displayUserMsg() {
  var userMessageInput = messageFormInput.value;
  var isFormValid = displayError();
  
  if (!isFormValid) {
    message.innerHTML = userMessageInput;
    clearForm();
    hide(submitMessageButton);
    hide(userForm);
    show(addMessageButton);
    show(clearButton);
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
  var checkMsg = validate(messageFormInput.value, errorMessage
  );

  if (checkType || checkMsg) {
    return true;
  } else {
    return false;
  }
}

function clearForm() {
  messageFormInput.value = "";
  formTypeInput.value = "";
}

function clearMsg() {
  show(userForm);
  show(submitMessageButton);
  hide(message)
  hide(clearButton);
  hide(addMessageButton);
}

function hide(element) {
  element.classList.add('visibility-hidden');
}

function show(element) {
  element.classList.remove('visibility-hidden');
}


 