const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

do {
  guess = prompt('Guess a number betweeen 1 and 10.');
  attempts++;

  if (parseInt(guess) === randomNumber) {
    message = `It took you ${attempts} attempts to guess correctly! The number was ${randomNumber}`
    break;
  } else {
    message = `You did not guess the number. It was ${randomNumber}.`
  }
  } while (attempts < 10);

main.innerHTML = `<h1>${message}</h1>`;


// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number