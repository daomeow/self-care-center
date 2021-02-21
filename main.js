var addMessageButton = document.querySelector('.button-form');
var clearButton = document.querySelector('.button-clear');
var errorMessage = document.querySelector('.error-msg');
var errorRadio = document.querySelector('.error-radio-type');
var errorType = document.querySelector('.error-type');
var formTypeInput = document.querySelector('#types');
var icon = document.querySelector('.icon');
var loginButton = document.querySelector('.login-button');
var loginName = document.querySelector('.user-name');
var loginPage = document.querySelector('.login-page');
var mainIntro = document.querySelector('.intro');
var mainPage = document.querySelector('.main-page');
var message = document.querySelector('.message-display');
var messageFormInput = document.querySelector('.user-msg');
var radioAffirmation = document.querySelector('#affirmation');
var radioMantra = document.querySelector('#mantra');
var receiveMessageButton = document.querySelector('.receive-button');
var submitMessageButton = document.querySelector('.submit');
var userForm = document.querySelector('.add-msg-form');

loginButton.addEventListener('click', function(event) {
  showWelcome();
  event.preventDefault();
});
receiveMessageButton.addEventListener('click', function(event) {
  displayMessage();
  event.preventDefault();
});
addMessageButton.addEventListener('click', displayForm);
submitMessageButton.addEventListener('click', displayUserMessage);
clearButton.addEventListener('click', clearMessage);

function showWelcome() {
  var name = loginName.value

  if (name !== "") {
    mainIntro.innerHTML = `
    Welcome, ${name}! Learn from yesterday, live for today, hope for tomorrow.
    `
    hide(loginPage);
    show(mainPage);
  } else {
    show(loginError)
  }
}

function confirmRadioButton() {
  if (!radioAffirmation.checked && !radioMantra.checked) {
    show(errorRadio);
  } else {
    hide(errorRadio);
  }
}

function typeOfMessage() {
  confirmRadioButton();

  if (radioAffirmation.checked) {
    return 1;
  } else if (radioMantra.checked) {
    return 2;
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function displayMessage() {
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];
  var randomMantra = mantra[getRandomIndex(mantra)];
  var type = typeOfMessage();
  
  if (type === 1) {
    message.innerHTML = randomAffirmation;
  } else if (type === 2 ) {
    message.innerHTML = randomMantra;
  } else {
    return;
  } 
  hide(icon);
  hide(submitMessageButton);
  hide(userForm);
  show(addMessageButton);
}

function displayForm() {
  hide(addMessageButton);
  hide (clearButton);
  hide(icon);
  hide(errorType);
  hide(errorMessage);
  hide(message);
  show(submitMessageButton);
  show(userForm);
}

function displayUserMessage() {
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

function validateForm(userEntry, warning) {
  if (userEntry === "") {
    show(warning);
    return true;
  } else {
    hide(warning)
    return false;
  }
} 

function displayError() {
  var checkType = validateForm(formTypeInput.value, errorType);
  var checkMsg = validateForm(messageFormInput.value, errorMessage);

  if (checkType || checkMsg) {
    return true;
  } else {
    return false;
  }
}

// function confirmRadioButton() {
//   if (!radioAffirmation.checked && !radioMantra.checked) {
//     show(errorRadio);
//   } else {
//     hide(errorRadio);
//   }
// }

function clearForm() {
  messageFormInput.value = "";
  formTypeInput.value = "";
}

function clearMessage() {
  hide(clearButton);
  hide(message);
  show(addMessageButton);
  show(icon);
}

function hide(element) {
  element.classList.add('visibility-hidden');
}

function show(element) {
  element.classList.remove('visibility-hidden');
}


 