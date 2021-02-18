var radioAffirmation = document.querySelector('#affirmation');
var radioMantra = document.querySelector('#mantra');
// var checkedRadio = document.getElementsByTagName('input')
var buttonReceive = document.querySelector('.button-msg');
var buttonAdd = document.querySelector('.button-form');

// EVENT LISTENERS
buttonReceive.addEventListener('click', function(event) {
  displayMsg()
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
  var type = typeOfMsg();
  var randomAffirmation = affirmation[getRandomIndex(affirmation)];
  var randomMantra = mantra[getRandomIndex(mantra)];

  if (type) {
    console.log(randomAffirmation);
  } else {
    console.log(randomMantra);
  }
}

function show(element) {
  element.classList.add('display-hidden');
}

function hide(element) {
  element.classList.remove('display-hidden');
}
 