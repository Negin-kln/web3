// -----------Array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(3);
let fruits1 = fruits[3];
console.log("fruit = " + fruit);
console.log("fruits1 = " + fruits1);
// -------
const arr1 = ["Banana", "Orange"];
const arr2 = ["Apple", "Mango"];
let fruits2 = arr1.concat(arr2);
console.log("fruits2 = " + fruits2);
const arr3 = ["Blueberry"];
let fruits3 = arr1.concat(arr2, arr3);
console.log("fruits3 = " + fruits3);
// --------
let fruits4 = fruits2.constructor;
console.log("fruits4 = " + fruits4);
let fruits5 = fruits3.copyWithin(2, 1, 3);
console.log("fruits5 = " + fruits5);
let fruits6 = fruits3.copyWithin(2, 1);
console.log("fruits6 = " + fruits6);
// ---------
let text = "";
let fruits7 = fruits.entries();
for (let x of fruits7) {
  text += x + `<br>`;
}
console.log(text);
// ----------
const age = [12, 7, 15, 18, 20, 14, 24, 35, 40, 44];
function ageCheck(age) {
  return age > 18;
}
console.log("is every element over 18? " + age.every(ageCheck));
const age1 = [19, 21, 25, 34, 43];
function ageCheck1(age1) {
  return age1 >= 18;
}
console.log("is every element over 18? " + age1.every(ageCheck1));
// -----------
console.log("fruits = " + fruits);
let fruits8 = fruits.fill("kiwi");
console.log("fruits8 = " + fruits8);
fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruits9 = fruits.fill("kiwi", 2, 3);
console.log("fruits9 = " + fruits9);
// ----------
console.log("element over 18? " + age.filter(ageCheck));
console.log("element over 18? " + age1.filter(ageCheck1));
// ---------
console.log("first element over 18? " + age.find(ageCheck));
console.log("first element over 18? " + age1.find(ageCheck1));
// --------
console.log("first element index over 18? " + age.findIndex(ageCheck));
console.log("first element index over 18? " + age1.findIndex(ageCheck1));
// ----------
console.log("last element over 18? " + age.findLast(ageCheck));
console.log("last element over 18? " + age1.findLast(ageCheck1));
// ---------
console.log("last element index over 18? " + age.findLastIndex(ageCheck));
console.log("last element index over 18? " + age1.findLastIndex(ageCheck1));
// -----------
let myArr1 = [
  [1, 2],
  [3, 4],
  [7, 8, 9],
];
let newMyArr1 = myArr1.flat();
console.log("newMyArr1 = " + newMyArr1);
let myArr2 = [
  [1, 2],
  [3, [5, 15, 25]],
  [7, 8, 9],
];
let newMyArr2 = myArr2.flat();
console.log("newMyArr2 = " + newMyArr2);
// ----------
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr4 = arr4.flatMap((x) => [x, x / 10]);
console.log(newArr4);
// ---------
let text2 = "";
let fruits10 = fruits.forEach(myfunction);
function myfunction(index, item) {
  text2 += index + ":" + item + "<br>";
}
console.log(text2);
// -----------
const text3 = "ABCDEFG";
let newText3 = Array.from(text3);
console.log(newText3);
// ------------
console.log("fruits = " + fruits);
console.log("is Banana in fruits?" + fruits.includes("Banana"));
console.log("is Banana in fruits?" + fruits.includes("Banana", 0));
console.log("is Banana in fruits?" + fruits.includes("Banana", 3));
// ----------
console.log("is Mango in fruits?" + fruits.indexOf("Mango"));
console.log("is Mango in fruits?" + fruits.indexOf("Mango", 0));
console.log("is Mango in fruits?" + fruits.indexOf("Mango", 3));
// --------
console.log((newText3 = Array.isArray(fruits)));
console.log((newText3 = Array.isArray(text3)));
// ---------
console.log((newArr4 = fruits.join()));
console.log((newArr4 = fruits.join(" and ")));
// ----------
let text4 = "";
const cars = ["BMW", "Benz", "Ford", "Honda", "Kia"];
let newCars = cars.keys();
for (let y of newCars) {
  text4 += y + ",";
}
console.log(text4);
// ------------
console.log(cars.lastIndexOf("Ford"));
cars.push("Ford", "Kia");
console.log(cars);
console.log(cars.lastIndexOf("Ford"));
// -----------
console.log("cars length : ", cars.length);
// ---------
const arr5 = [4, 16, 25, 36];
console.log(arr5.map(Math.sqrt));
function zarb(number) {
  return number * 10;
}
console.log(arr5.map(zarb));
// ----------
console.log(Array.of(cars));
// ---------
console.log(cars);
cars.pop();
console.log(cars);
console.log(cars.pop());
// -----------
Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
fruits.myUcase();
console.log(fruits);
// ------------
const number = [175, 250, 70];
console.log(number.reduce(myFunc));
function myFunc(total, num) {
  return total - num;
}
console.log(number.reduce(getSum, 0));
function getSum(total, num) {
  return total + Math.round(num);
}
console.log(number.reduceRight(myFunc));
console.log(number.reduceRight(getSum, 0));
// ------------
console.log(cars.reverse());
let cars1 = cars.shift();
console.log(cars1);
console.log(cars);
// -----------
console.log(cars.slice(0, 2));
console.log(age.some(ageCheck));
console.log(fruits);
console.log(fruits.sort());
// -----------
fruits.splice(2, 0, "kiwi", "blueberry");
console.log(fruits);
let fruit11 = fruits.toReversed();
console.log(fruit11);
let fruit12 = fruits.toSorted();
console.log(fruit12);
let fruit13 = fruits.toSpliced(2, 0, "berry", "apple");
console.log(fruit13);
console.log("fruits = ", fruits);
let fruit14 = fruits.toString();
console.log(fruit14);
let fruit15 = fruits.unshift("blue", "red");
console.log(fruits);
// -----------
let text5 = "";
const list = fruits.values();
for (let x of list) {
  text5 += x + " ";
}
console.log(text5);
// -----------
let fruit16 = fruits.valueOf();
console.log(fruit16);
// ------------
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);
