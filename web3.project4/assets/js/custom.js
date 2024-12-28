// ---------programiz.exp23(HCF-for)
let hcf;
let num1 = parseInt(prompt("please enter first number: "));
let num2 = parseInt(prompt("please enter second number: "));
for (let i = 1; i <= num1 && i <= num2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    hcf = i;
  }
}
console.log(`Hcf ${num1} and ${num2} is ${hcf}.`);
// ---------programiz.exp23(HCF-while)
while (num1 != num2) {
  if (num1 > num2) {
    num1 -= num2;
  } else {
    num2 -= num1;
  }
}
console.log(`HCF is ${num1}`);
