//--------------------exp.61
const date = new Date(2017, 2, 12, 9, 25, 30);
const dateString = date.toDateString();
const time = date.toLocaleTimeString();
console.log(`date : ${dateString}`);
console.log(`time : ${time}`);
//--------------------exp.62(1)
function checkLeapYear(year) {
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400)
    console.log(`${year} is a leap year.`);
  else console.log(`${year} is not a leap year.`);
}
checkLeapYear(2000);
//--------------------exp.62(2)
function checkLeapYear2(year) {
  let leap = new Date(year, 1, 29).getDate() === 29;
  if (leap) console.log(`${year} is a leap year.`);
  else console.log(`${year} is not a leap year.`);
}
checkLeapYear2(2000);
//--------------------exp.63
let currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1;
let year = currentDate.getFullYear();
if (day < 10) day = "0" + day;
if (month < 10) month = "0" + month;
const formattedDate1 = month + "/" + day + "/" + year;
console.log(formattedDate1);
const formattedDate2 = month + "-" + day + "-" + year;
console.log(formattedDate2);
const formattedDate3 = day + "-" + month + "-" + year;
console.log(formattedDate3);
const formattedDate4 = day + "/" + month + "/" + year;
console.log(formattedDate4);
//--------------------exp.64
const currentDate2 = new Date();
const dateString2 = currentDate2.toDateString();
const time2 = currentDate2.toLocaleTimeString();
console.log("date: " + dateString2);
console.log("time: " + time2);
//--------------------exp.65
const d1 = new Date();
const d2 = new Date();
const compare1 = d1 < d2;
console.log(compare1);
const compare2 = d1 > d2;
console.log(compare2);
const compare3 = d1 <= d2;
console.log(compare3);
const compare4 = d1 >= d2;
console.log(compare4);
const compare5 = d1.getTime() === d2.getTime();
console.log(compare5);
const compare6 = d1.getTime() !== d2.getTime();
console.log(compare6);
//--------------------exp.66
let countDownDate = new Date().getTime() + 24 * 60 * 60 * 1000;
let x = setInterval(function () {
  let now = new Date().getTime();
  let timeLeft = countDownDate - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);
  console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  if (timeLeft < 0) {
    clearInterval(x);
    console.log("CountDown Finished");
  }
}, 2000);
//--------------------exp.67(1)
function removeItem(array, item) {
  newArr = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] !== item) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
let result = removeItem([1, 2, 3, 4, 5, 6, 7], 6);
console.log(result);
//--------------------exp.67(2)
function removeItem2(array, item) {
  let arr = array.indexOf(item);
  if (arr) {
    array.splice(arr, 1);
  }
  return array;
}
result = removeItem2([1, 2, 3, 4, 5, 6, 7], 6);
console.log(result);
//--------------------exp.68(1)
const array = ["you", "will", "learn", "javascript"];
const hasValue = array.includes("javascript");
if (hasValue) {
  console.log("Array contains a value.");
} else {
  console.log("Array does not contain a value.");
}
//--------------------exp.68(2)
const array2 = ["you", "will", "learn", "javascript"];
const hasValue2 = array.indexOf("javascript") !== -1;
if (hasValue) {
  console.log("Array contains a value.");
} else {
  console.log("Array does not contain a value.");
}
//--------------------exp.69(1)
function insertElement() {
  let array = [1, 2, 3, 4, 5];

  let index = 3;
  let element = 8;
  array.splice(index, 0, element);
  console.log(array);
}
insertElement();
//--------------------exp.69(2)
function insertElement2() {
  let array = [1, 2, 3, 4];
  let index = 3;
  let element = 8;
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = element;
  console.log(array);
}
insertElement2();
//--------------------exp.70(1)
function insertObject(arr, obj) {
  arr.push(obj);
  console.log(arr);
}
let array3 = [1, 2, 3];
let object = { x: 12, y: 8 };
insertObject(array3, object);
//--------------------exp.70(2)
function insertObject2(arr, obj) {
  let index = arr.length;
  arr.splice(index, 0, obj);
  console.log(arr);
}
let array4 = [1, 2, 3];
let object2 = { x: 12, y: 8 };
insertObject(array4, object2);
//--------------------exp.70(3)
function insertObject3(arr, obj) {
  arr = [...arr, obj];
  console.log(arr);
}
let array5 = [1, 2, 3];
let object3 = { x: 12, y: 8 };
insertObject(array5, object3);
