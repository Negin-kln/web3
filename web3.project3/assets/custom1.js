// ---------programiz.exp14
function prime() {
  var lowerNumber = parseInt(prompt("please enter a low number: "));
  var higherNumber = parseInt(prompt("please enter a high number: "));
  console.log(
    `The prime numbers between ${lowerNumber} and ${higherNumber} are:`
  );

  for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      console.log(i);
    }
  }
}
prime();
// ---------programiz.exp15
function fact() {
  var number = Number(prompt("please enter a number: "));
  if (number < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  } else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
  } else {
    var fact = 1;
    for (var i = 1; i <= number; i++) {
      fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
  }
}
fact();
