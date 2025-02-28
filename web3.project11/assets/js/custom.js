// ----------------------exp.81(1)
function performIntersection(array1, array2) {
  let setA = new Set(array1);
  let setB = new Set(array2);
  let performIntersection = [];
  for (let i of setB) {
    if (setA.has(i)) performIntersection.push(i);
  }
  return performIntersection;
}
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [4, 5, 6, 7, 8];
let result = performIntersection(arr1, arr2);
console.log(result);
// ----------------------exp.81(2)
function performIntersection2(array1, array2) {
  let result = array1.filter((x) => array2.indexOf(x) !== -1);
  return result;
}
result = performIntersection2(arr1, arr2);
console.log(result);
// ----------------------exp.82(1)
function splitIntoChunk(arr, chunk) {
  for (let i = 0; i <= arr.length; i += chunk) {
    let tempArray = arr.slice(i, i + chunk);
    console.log(tempArray);
  }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
result = splitIntoChunk(array, 2);
console.log(result);
// ----------------------exp.82(2)
function splitIntoChunk2(arr, chunk) {
  while (arr.length > 0) {
    let tempArray = arr.splice(0, chunk);
    console.log(tempArray);
  }
}
result = splitIntoChunk2(array, 2);
console.log(result);
// ----------------------exp.84(1)
function getFileExtension(filename) {
  let file = filename.split(".").pop();
  return file;
}
result = getFileExtension("module.js");
console.log(result);
result = getFileExtension("module.txt");
console.log(result);
result = getFileExtension("module.html");
console.log(result);
// ----------------------exp.84(2)
function getFileExtension2(filename) {
  const extension = filename.substring(
    filename.lastIndexOf(".") + 1,
    filename.length
  );
  return extension;
}
result = getFileExtension2("module.js");
console.log(result);
result = getFileExtension2("module.txt");
console.log(result);
result = getFileExtension2("module.html");
console.log(result);
// ----------------------exp.85(1)
function checkVariable(variable) {
  if (variable == null) {
    console.log("The variable is undefined or null");
  } else {
    console.log("The variable is neither undefined nor null");
  }
}
let newVariable;
checkVariable(5);
checkVariable("hello");
checkVariable(null);
checkVariable(newVariable);
checkVariable("+");
// ----------------------exp.85(2)
function checkVariable2(variable) {
  if (typeof variable === "undefined" || variable === null) {
    console.log("The variable is undefined or null");
  } else {
    console.log("The variable is neither undefined nor null");
  }
}
checkVariable2(5);
checkVariable2("hello");
checkVariable2(null);
checkVariable2(newVariable);
// ----------------------exp.86(1)
function sum(x = 5, y = 7) {
  return x + y;
}
console.log(sum(5, 15));
console.log(sum(3));
console.log(sum());
// ----------------------exp.86(2)
const calculate = function (x = 15, y = 8) {
  return x + y;
};
console.log(calculate(5, 10));
console.log(calculate(7));
console.log(calculate());
// ----------------------exp.87(1)
function union(a, b) {
  let unionSet = new Set(a);
  for (let i of b) {
    unionSet.add(i);
  }
  return unionSet;
}
const setA = new Set(["apple", "mango", "orange"]);
const setB = new Set(["grapes", "apple", "banana"]);
result = union(setA, setB);
console.log(result);
// ----------------------exp.87(2)
function intersection(setA, setB) {
  let intersectionSet = new Set();
  for (let i of setB) {
    if (setA.has(i)) {
      intersectionSet.add(i);
    }
  }
  return intersectionSet;
}
result = intersection(setA, setB);
console.log(result);
// ----------------------exp.87(3)
function different(setA, setB) {
  let differenceSet = new Set(setA);
  for (let i of setB) {
    differenceSet.delete(i);
  }
  return differenceSet;
}
result = different(setA, setB);
console.log(result);
// ----------------------exp.87(4)
function different2(setA, setB) {
  let differenceSet = new Set(setB);
  for (let i of setA) {
    differenceSet.delete(i);
  }
  return differenceSet;
}
result = different2(setA, setB);
console.log(result);
// ----------------------exp.88
const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));
const a = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Random value between ${min} and ${max} is ${a}`);
// ----------------------exp.89
const url1 = window.location.href;
const url2 = document.URL;
console.log(url1);
console.log(url2);
// ----------------------exp.90
function validateEmail(email_id) {
  const regex_pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex_pattern.test(email_id)) {
    console.log("The email address is valid");
  } else {
    console.log("The email address is not valid");
  }
}
validateEmail("abc123@gmail.com");
validateEmail("hello@com");
