// ---------programiz.exp28(Shuffle Deck of Cards)
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];
let deck = [];
for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { Value: values[x], Suit: suits[i] };
    deck.push(card);
  }
}
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}
console.log("The first five cards are:");
for (let i = 0; i < 5; i++) {
  console.log(`${deck[i].Value} of ${deck[i].Suit}`);
}

// ---------programiz.exp29(Fibonacci Sequence Upto nth Term using Recursion)
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
const nTerms = prompt("Enter the number of terms: ");
if (nTerms <= 0) {
  console.log("Enter a positive integer.");
} else {
  for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
  }
}

// ---------programiz.exp30(Find Factorial Using Recursion)
function factorial(x) {
  if (x == 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
const num = prompt("Enter a positive number: ");
if (num >= 0) {
  const result = factorial(num);
  console.log(`The factorial of ${num} is ${result}`);
} else {
  console.log("Enter a positive number.");
}
// ---------programiz.exp31
const number = parseInt(prompt("Enter a decimal number: "));
const result = number.toString(2);
console.log("Binary:" + " " + result);
