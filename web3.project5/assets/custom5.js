// ---------programiz.exp34
const string = prompt("please enter a sentence: ");
let words = string.split(" ");
words.sort();
console.log("The sorted words are:");
for (const element of words) {
  console.log(element);
}
// ---------programiz.exp35
const text = "Mr Red has a red house and a red car";
const newText = text.replace("red", "blue");
console.log(newText);
const newText2 = /red/g;
const newText3 = text.replace(newText2, "yellow");
console.log(newText3);
// ---------programiz.exp36
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
const result = reverseString(string);
console.log(result);
// -----------------exp36(2)
function reverseString2(str) {
  const arrayStrings = str.split("");
  const reverseArray = arrayStrings.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
}
const result2 = reverseString2(string);
console.log(result2);
// ---------programiz.exp37
const person = {
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
  greet: function () {
    console.log("Hello everyone.");
  },
  score: {
    maths: 90,
    science: 80,
  },
};

console.log(typeof person);
console.log(person.name);
console.log(person.hobbies[0]);
person.greet();
console.log(person.score.maths);
// ---------programiz.exp37(2)
const person1 = new Object({
  name: "John",
  age: 20,
  hobbies: ["reading", "games", "coding"],
  greet: function () {
    console.log("Hello everyone.");
  },
  score: {
    maths: 90,
    science: 80,
  },
});
console.log(typeof person1);
console.log(person1.name);
console.log(person1.hobbies[0]);
person1.greet();
console.log(person1.score.maths);
// ---------programiz.exp37(3)
function PersonList() {
  (this.name = "John"),
    (this.age = 20),
    (this.hobbies = ["reading", "games", "coding"]),
    (this.greet = function () {
      console.log("Hello everyone.");
    }),
    (this.score = {
      maths: 90,
      science: 80,
    });
}
const person3 = new PersonList();
console.log(typeof person3);
console.log(person3.name);
console.log(person3.hobbies[0]);
person.greet();
console.log(person3.score.maths);
// ---------programiz.exp38
function countString(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      count += 1;
    }
  }
  return count;
}
const letterToCheck = prompt("Enter a letter to check: ");
const result3 = countString(string, letterToCheck);
console.log(result3);
// ---------programiz.exp38(2)
function countString(str, letter) {
  const re = new RegExp(letter, "g");
  const count = str.match(re).length;
  return count;
}
const result4 = countString(string, letterToCheck);
console.log(result4);
// ---------programiz.exp39
function capitalizeFirstLetter(str) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
}
const result5 = capitalizeFirstLetter(string);
console.log(result5);
// ---------programiz.exp39(2)
function capitalizeFirstLetter(str) {
  const capitalized = str.replace(/^./, str[0].toUpperCase());
  return capitalized;
}
const result6 = capitalizeFirstLetter(string);
console.log(result6);
// ---------programiz.exp40
function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}
const result7 = countVowel(string);
console.log(result7);
// ---------programiz.exp40(2)
const vowels = ["a", "e", "i", "o", "u"];
function countVowel1(str) {
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
const result8 = countVowel1(string);
console.log(result8);
