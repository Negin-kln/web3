// -----------------------------exp(41)
const student = {
  name: "negin",
  lastName: "kalantari",
  age: 25,
  greet: function () {
    console.log(`Hello everyone.`);
  },
  score: {
    maths: 90,
    science: 80,
  },
};
console.log(student);
delete student.greet;
delete student["score"];
console.log(student);
// ---------------------------exp(42)(1)
function checkString(str) {
  if (
    str.startsWith("S") ||
    (str.startsWith("s") && str.endsWith("G")) ||
    str.endsWith("g")
  )
    console.log("The string starts with S and ends with G");
  else if (str.startsWith("S") || str.startsWith("s"))
    console.log("The string starts with S but does not end with G");
  else if (str.endsWith("G") || str.startsWith("g"))
    console.log("The string starts does not with S but end with G");
  else console.log("The string does not start with S and does not end with G");
}
// ----------------------------exp(42)(2)
function checkString2(str) {
  if (/^S/i.test(str) && /G$/i.test(str))
    console.log("The string starts with S and ends with G");
  else if (/^S/i.test(str))
    console.log("The string starts with S but does not end with G");
  else if (/G$/i.test(str))
    console.log("The string starts does not with S but end with G");
  else console.log("The string does not start with S and does not end with G");
}
for (let i = 0; i < 3; i++) {
  let string = prompt("enter a string : ");
  checkString("checkString = ", string);
  checkString2("checkString2 = ", string);
}
// ----------------------------exp(43)(1)
const person = {
  id: 1,
  name: "negin",
  age: 25,
};
let hasKey = "name" in person;
if (hasKey) {
  console.log("The key exists.");
} else {
  console.log("The key does not exist.");
}
// ----------------------------exp(43)(2)
let hasKey2 = person.hasOwnProperty("name");
if (hasKey) {
  console.log("The key exists.");
} else {
  console.log("The key does not exist.");
}
// ----------------------------exp(44)(1)
const std1 = {
  name: "melika",
  lastName: "talebi",
  age: 15,
  mark: {
    math: 65,
    english: 73,
  },
};
let copy = std1;
copy.name = "baran";
console.log("std1.name = ", std1.name);
console.log("copy.name = ", copy.name);
// ----------------------------exp(44)(2)
let cloneStd1 = Object.assign({}, std1);
cloneStd1.age = 18;
console.log("std1.age = ", std1.age);
console.log("cloneStd1.age = ", cloneStd1.age);
// ----------------------------exp(44)(3)
let cloneStd2 = { ...std1 };
cloneStd2.lastName = "bagheri";
console.log("std1.lastName = ", std1.lastName);
console.log("cloneStd2.lastName = ", cloneStd2.lastName);
// ----------------------------exp(44)(4)
let cloneStd3 = JSON.parse(JSON.stringify(std1));
cloneStd3.mark.math = 82;
console.log("std1.mark.math ", std1.mark.math);
console.log("cloneStd3.mark.math = ", cloneStd3.mark.math);
// ----------------------------exp(45)(1)
const std2 = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
};
for (let key in std2) {
  let value;
  value = std2[key];
  console.log(key + "-" + value);
}
// ----------------------------exp(45)(2)
const person1 = {
  gender: "male",
};
std2.__proto__ = person1;
for (let key in std2) {
  let value;
  value = std2[key];
  console.log(key + "-" + value);
}
// ----------------------------exp(45)(3)
for (let [key, value] of Object.entries(std2)) {
  console.log(key + "-" + value);
}
// ----------------------------exp(45)(4)
if (std2.hasOwnProperty("name")) console.log("name-" + std2.name);
if (std2.hasOwnProperty("age")) console.log("age-" + std2.age);
if (std2.hasOwnProperty("hobbies")) console.log("hobbies -" + std2.hobbies);
// ----------------------------exp(46)(1)
console.log("std2 = ", std2);
let newStd1 = { ...std2, ...person1 };
console.log("std2 = ", std2);
console.log("newStd1 = ", newStd1);
// ----------------------------exp(46)(2)
let newStd2 = Object.assign(std2, person1);
console.log("std2 = ", std2);
console.log("newStd2 = ", newStd2);
// ----------------------------exp(47)(1)
let count = 0;
for (let key in std2) {
  ++count;
}
console.log(count);
// ----------------------------exp(47)(2)
count = 0;
const person3 = {
  phoneNumber: "0918******",
};
std2.__proto__ = person3;
for (let key in std2) {
  ++count;
}
console.log(count);
// ----------------------------exp(47)(3)
console.log(std2);
let result = Object.keys(std2).length;
console.log(result);
// ----------------------------exp(48)(1)
const std3 = {
  name: "maria",
  age: 19,
  gender: "female",
};
std3.height = 4.5;
console.log("std3 = ", std3);
// ----------------------------exp(48)(2)
std3["hobbies"] = ["reading", "play game"];
console.log("std3 = ", std3);
// ----------------------------exp(49)(1)
const text = "Mr Red has a red house and a red car";
let regex = /red/gi;
console.log("text = ", text.replace(regex, "blue"));
// ----------------------------exp(49)(2)
console.log("text = ", text.split(regex).join("Brown"));
// ----------------------------exp(50)(1)
let message =
  "This is a long message\n" +
  "that spans across multiple lines\n" +
  "in the code.";
console.log(message);
// ----------------------------exp(50)(2)
message =
  "This is a long message\n \
  that spans across multiple lines\n \
  in the code.";
console.log(message);
// ----------------------------exp(50)(3)
message = `This is a long message
  that spans across multiple lines
  in the code.`;
console.log(message);
