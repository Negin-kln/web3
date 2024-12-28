// ---------programiz.exp27(Program to Guess a Number)
function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const number = parseInt(prompt("plaese enter a number between 1 to 10: "));
  while (number != randomNumber) {
    const number = parseInt(prompt("plaese enter a number between 1 to 10: "));
    if (number == randomNumber) {
      console.log("You guessed the correct number.");
    }
  }
}
guessNumber();
