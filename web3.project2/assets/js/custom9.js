// ---------programiz.exp3
var number1 = Number(prompt("enter number1"));
var number2 = Number(prompt("enter number2"));
var number3 = Number(prompt("enter number3"));
var result1 = Math.sqrt(number1);
var result2 = Math.sqrt(number2);
var result3 = Math.sqrt(number3);
console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
console.log(`The square root of ${number3} is ${result3}`);

// ---------programiz.exp4
var baseValue = Number(prompt("enter baseValue"));
var heightValue = Number(prompt("enter heightValue"));
var areaValue = (baseValue * heightValue) / 2;
console.log(
  `The area of the triangle is: (${baseValue} * ${heightValue} / 2 = ${areaValue})`
);

var side1 = Number(prompt("enter side1"));
var side2 = Number(prompt("enter side2"));
var side3 = Number(prompt("enter side3"));
var s = (side1 + side2 + side3) / 2;
var areaValue = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(`The area of the triangle is ${areaValue}`);
