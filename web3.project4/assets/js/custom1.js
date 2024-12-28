// ---------programiz.exp24(LCM-while)
const num1 = prompt("Enter a first positive integer: ");
const num2 = prompt("Enter a second positive integer: ");
let min = num1 > num2 ? num1 : num2;
while (true) {
  if (min % num1 == 0 && min % num2 == 0) {
    console.log(`The LCM of ${num1} and ${num2} is ${min}`);
    break;
  }
  min++;
}
// ---------programiz.exp24(LCM-for)
let hcf;
const number1 = prompt("Enter a first positive integer: ");
const number2 = prompt("Enter a second positive integer: ");
for (let i = 1; i <= number1 && i <= number2; i++) {
  if (number1 % i == 0 && number2 % i == 0) {
    hcf = i;
  }
}
let lcm = (number1 * number2) / hcf;
console.log(`HCF of ${number1} and ${number2} is ${lcm}.`);

// ---------programiz.exp25(Factors)
const num = prompt("Enter a positive number: ");
console.log(`The factors of ${num} is:`);
for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    console.log(i);
  }
}
// ---------programiz.exp26(Sum of Natural Numbers)
function sum(num) {
  if (num > 0) {
    return num + sum(num - 1);
  } else {
    return num;
  }
}
const number = parseInt(prompt("Enter a positive integer: "));
const result = sum(number);
console.log(`The sum is ${result}`);
