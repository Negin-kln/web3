// ------------------------exp.71
function checkObject(arr) {
  const array = Array.isArray(arr);
  if (array) console.log(`${arr} is an array.`);
  else console.log(`${arr} is not an array.`);
}
let number = [1, 2, 3];
console.log(checkObject(number));
// ------------------------exp.72(1)
function emptyArray1(arr) {
  arr = [];
  return arr;
}
console.log(number);
const result1 = emptyArray1(number);
console.log(result1);
// ------------------------exp.72(2)
function emptyArray2(arr) {
  arr.splice(0, arr.length);
  return arr;
}
console.log(number);
const result2 = emptyArray2(number);
console.log(result2);
// ------------------------exp.72(3)
number = [1, 2, 3];
function emptyArray3(arr) {
  arr.length = 0;
  return arr;
}
console.log(number);
const result3 = emptyArray3(number);
console.log(result3);
// ------------------------exp.73(1)
number = [1, 2, 3];
function addArray1(arr) {
  arr.unshift(4);
  return arr;
}
console.log(number);
let result4 = addArray1(number);
console.log(result4);
// ------------------------exp.73(2)
number = [1, 2, 3];
function addArray2(arr) {
  arr.splice(0, 0, 4);
  return arr;
}
console.log(number);
let result5 = addArray2(number);
console.log(result5);
// ------------------------exp.73(3)
number = [1, 2, 3];
function addArray3(arr) {
  arr = [4, ...arr];
  return arr;
}
console.log(number);
let result6 = addArray3(number);
console.log(result6);
// ------------------------exp.73(4)
number = [1, 2, 3];
function addArray4(arr) {
  arr = [4].concat(arr);
  return arr;
}
console.log(number);
let result7 = addArray4(number);
console.log(result7);
// ------------------------exp.74(1)
function addUnique1(arr) {
  let uniq = [];
  for (let i of arr) {
    if (uniq.indexOf(i) === -1) uniq.push(i);
  }
  console.log(uniq);
}
let number1 = [1, 2, 3, 4, 2, 3, 5];
let result8 = addUnique1(number1);
console.log(result8);
// ------------------------exp.74(2)
console.log(number1);
function addUnique2(arr) {
  let uniq = [...new Set(arr)];
  return uniq;
}
let result9 = addUnique2(number1);
console.log(result9);
// ------------------------exp.75(1)
function getUniqueAfterMerge1(arr1, arr2) {
  let merge = arr1.concat(arr2);
  let uniq = [];
  for (let i of merge) {
    if (uniq.indexOf(i) === -1) uniq.push(i);
  }
  return uniq;
}
let array1 = [1, 2, 3];
let array2 = [2, 3, 4, 5];
let result10 = getUniqueAfterMerge1(array1, array2);
console.log(result10);
// ------------------------exp.75(2)
function getUniqueAfterMerge2(arr1, arr2) {
  let merge = [...array1, ...array2];
  let uniq = [...new Set(merge)];
  return uniq;
}
let result11 = getUniqueAfterMerge2(array1, array2);
console.log(result11);
// ------------------------exp.76(1)
function compareName(a, b) {
  const name1 = a.name.toUpperCase();
  const name2 = b.name.toUpperCase();

  let comparison = 0;

  if (name1 > name2) {
    comparison = 1;
  } else if (name1 < name2) {
    comparison = -1;
  }
  return comparison;
}
const students1 = [
  { name: "Sara", age: 24 },
  { name: "John", age: 24 },
  { name: "Jack", age: 25 },
  { name: "arezo", age: 25 },
];
console.log(students1.sort(compareName));
// ------------------------exp.76(2)
function compareAge(a, b) {
  return a.age - b.age;
}
const students2 = [
  { name: "Sara", age: 24 },
  { name: "John", age: 22 },
  { name: "Jack", age: 27 },
  { name: "arezo", age: 25 },
];
console.log(students2.sort(compareAge));
// ------------------------exp.77(1)
function twoDimensionArray(a, b) {
  let arr = [];
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i] = [];
    }
  }
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i][j] = j;
    }
  }
  return arr;
}
const x = 2;
const y = 3;
const result12 = twoDimensionArray(x, y);
console.log(result12);
// ------------------------exp.78(1)
function extractValue1(arr, prop) {
  let extractedValue = arr.map((item) => item[prop]);
  return extractedValue;
}
const objArray = [
  { a: 1, b: 2 },
  { a: 4, b: 5 },
  { a: 8, b: 9 },
];
const result13 = extractValue1(objArray, "a");
console.log(result13);
// ------------------------exp.78(2)
function extractValue2(arr, prop) {
  let extractedValue = [];
  for (let i = 0; i < arr.length; ++i) {
    extractedValue.push(arr[i][prop]);
  }
  return extractedValue;
}
const result14 = extractValue2(objArray, "a");
console.log(result14);
// ------------------------exp.79(1)
function compareArrays1(arr1, arr2) {
  let result = JSON.stringify(arr1) == JSON.stringify(arr2);
  if (result) console.log("The arrays have the same elements.");
  else console.log("The arrays have different elements.");
}
console.log(compareArrays1(array1, array2));
// ------------------------exp.79(2)
function compareArrays2(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    let result = false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
}
const result15 = compareArrays2(array1, array2);
if (result15) console.log("The arrays have the same elements.");
else console.log("The arrays have different elements.");
// ------------------------exp.80
function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}
const array = [1, "hello", 5, 8];
const result16 = getRandomItem(array);
console.log(result16);
