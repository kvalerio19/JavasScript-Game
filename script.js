var x = 0;


let randomNumber= Math.floor(Math.random()* 100) + 1; //Redondea numero hacia abajo

const guesses = document.querySelector('.guesses'); 
const lastResult = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');

const guessField = document.querySelector('.guessFiedls');

let guessCount = 1;
let resetButton;
