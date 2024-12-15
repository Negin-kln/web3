// ---------programiz.exp9
var a = Math.random();
console.log(a);
var highestNum = Number(prompt("enter highestNum"));
var lowestNum = Number(prompt("enter lowestNum"));
var b = Math.random() * (highestNum - lowestNum) + lowestNum;
console.log(`Random value between ${lowestNum} and ${highestNum} is ${b}`);
var c = Math.floor(Math.random() * (highestNum - lowestNum)) + lowestNum;
console.log(`Random value between ${lowestNum} and ${highestNum} is ${c}`);

var min = parseInt(prompt("Enter a min value: "));
var max = parseInt(prompt("Enter a max value: "));
var d = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random value between ${min} and ${max} is ${d}`);