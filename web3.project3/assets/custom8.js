// ---------programiz.exp(cmax)
function cMax(num1, num2) {
  var result = num1;
  if (num2 > result) {
    result = num2;
    console.log(`${num1} < ${result}`);
  } else {
    console.log(`${result} > ${num2}`);
  }
}
cMax(28, 12);
cMax(4, 8);
// ---------programiz.exp(Factorial)
function factorial(num) {
  var result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  console.log(result);
}
factorial(5);
factorial(4);
// ---------programiz.exp(array)
var fruit = ["apple", "watermelon", "tangerine", "orange"];
var text = "";
for (let i = 0; i < fruit.length; i++) {
  text += fruit[i] + " ";
}
console.log(`[${text}]`);
// ---------programiz.exp(The For In Loop(objects))
var std1 = { fname: "negin", lname: "kalantari", age: 25 };
var text1 = "";
for (let j in std1) {
  text1 += std1[j] + " ";
}
console.log(text1);
// ---------programiz.exp(The For In Loop(array))
var numbers = [10, -20, 15, 1.5, -8];
var txt = "";
for (let n in numbers) {
  txt += numbers[n] + " ";
}
console.log(`[${txt}]`);
// ---------programiz.exp(The For In Loop(Array.forEach()))
var number = [0, -12, 87, 3.5, 15];
var txt1 = "";
number.forEach(array);
console.log(txt1);
function array(value, index, array) {
  txt1 += value + " ";
}
// ---------programiz.exp(The For Of Loop(array))
var brands = ["apple", "samsung", "innovers", "msi"];
var text2 = "";
for (let b of brands) {
  text2 += b + " ";
}
console.log(`[${text2}]`);
// ---------programiz.exp(The For Of Loop(Looping over a String))
var fname = "negin";
var text3 = "";
for (let f of fname) {
  text3 += f + " ";
}
console.log(`[${text3}]`);
