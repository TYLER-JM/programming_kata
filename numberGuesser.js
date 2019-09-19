//a guessing game for the command line

let prompt = require("prompt-sync")();


let answer = Math.ceil(Math.random() * 50);
let guessAgain = parseInt(prompt("guess a number between 1 and 50... "), 10);
let allGuesses = [];

// eslint-disable-next-line no-constant-condition
while (true) {

  if (guessAgain !== guessAgain) {
    guessAgain = parseInt(prompt("that's not a number, guess again: "), 10);
  } else if (allGuesses.indexOf(guessAgain) >= 0) {
    guessAgain = parseInt(prompt("guess a different number: "), 10);
  } else if (guessAgain < answer) {
    allGuesses.push(guessAgain);
    guessAgain = parseInt(prompt("no, guess higher: "), 10);
  } else if (guessAgain > answer) {
    allGuesses.push(guessAgain);
    guessAgain = parseInt(prompt("no, guess lower: "), 10);
  } else if (guessAgain === answer) {
    allGuesses.push(guessAgain);
    console.log("that's right, it took you " + allGuesses.length + " guess(es)");
    break;
  }

}