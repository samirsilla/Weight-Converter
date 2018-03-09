var gramsOutput = document.getElementById('grams-output');
var kgOutput = document.getElementById('kg-output');
var ozOutput = document.getElementById('oz-output');
var displayCards = document.getElementById('cards');

document.getElementById('weight-input-field').addEventListener('input', convertWeight);

function convertWeight(e) {
  let pounds = e.target.value;

  if (pounds === '') {
    cards.style.visibility = 'hidden';
  } else {
    cards.style.visibility = 'visible';
  }
  gramsOutput.innerHTML = (pounds * 453.592).toFixed(4);
  kgOutput.innerHTML = (pounds / 2.2046).toFixed(4);
  ozOutput.innerHTML = (pounds * 16).toFixed(4);
}