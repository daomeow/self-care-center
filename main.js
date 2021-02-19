var radioAffirmation = document.querySelector('#affirmation');
var radioMantra = document.querySelector('#mantra');
// var checkedRadio = document.getElementsByTagName('input')
var buttonReceive = document.querySelector('.button-msg');
var buttonAdd = document.querySelector('.button-form');
var icon = document.querySelector('.icon');
var message = document.querySelector('.message');

// EVENT LISTENERS
buttonReceive.addEventListener('click', function(event) {
  displayMsg();
  event.preventDefault();
})

// FUNCTIONS 
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
}

function typeOfMsg() {
  if (radioAffirmation.checked) {
    return true;
  } else {
    return false;
  }
}

function displayMsg() {
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];
  var randomMantra = mantra[getRandomIndex(mantra)];
  var type = typeOfMsg();
  show(message);
  hide(icon);
  
  if (type) {
    message.innerHTML = randomAffirmation;
  } else {
     message.innerHTML = randomMantra;
  }
}

function show(element) {
  element.classList.remove('visibility-hidden');
}

function hide(element) {
  element.classList.add('visibility-hidden');
}
 