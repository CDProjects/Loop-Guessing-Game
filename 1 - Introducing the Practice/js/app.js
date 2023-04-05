const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

do {
  guess = prompt('Guess a number betweeen 1 and 10.')
  } while (parseInt(guess) !== randomNumber);

main.innerHTML = `<h1>You guessed correct!The number was ${randomNumber}</h1>`;


// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number