// ---------programiz.exp12
var num1 = Number(prompt("enter num1"));
var num2 = Number(prompt("enter num2"));
var num3 = Number(prompt("enter num3"));
var maxNumber;
if (num1 >= num2 && num1 >= num3) {
  maxNumber = num1;
} else if (num2 >= num1 && num2 >= num3) {
  maxNumber = num2;
} else {
  maxNumber = num3;
}
console.log(`the maxNumber is : ${maxNumber}`);

var maxNumber = Math.max(num1, num2, num3);
console.log("the maxNumber is : " + maxNumber);
