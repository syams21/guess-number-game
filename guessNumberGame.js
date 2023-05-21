// generate random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let guesses = [];

while (guess !== randomNumber) {
  // prompt user for guess
  guess = parseInt(prompt("Guess a number between 1 and 100"));

  // check if guess is valid
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100");
    continue;
  }

  // add guess to array of guesses
  guesses.push(guess);

  // check if guess is correct
  if (guess === randomNumber) {
    alert(`Congratulations! You guessed the number in ${guesses.length} attempts: ${guesses.join(', ')}`);
  } else if (guess < randomNumber) {
    alert("Too low! Guess again.");
  } else {
    alert("Too high! Guess again.");
  }
}