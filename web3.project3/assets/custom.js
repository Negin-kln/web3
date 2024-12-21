// ---------programiz.exp13
var num = Number(prompt("please enter a positive number: "));
var isPrime = true;

if (num === 1) {
  console.log("1 is neither prime nor composite number.");
} else if (num > 1) {
  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is a not prime number`);
  }
} else {
  console.log("The number is not a prime number.");
}
