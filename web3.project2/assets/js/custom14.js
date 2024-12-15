// ---------programiz.exp10
var num = Number(prompt("enter num"));
if (num > 0) {
  console.log("The num is positive.");
} else if (num == 0) {
  console.log("The num is zero.");
} else {
  console.log("The num is negative.");
}

if (num >= 0) {
  if (num == 0) {
    console.log("The num is zero.");
  } else {
    console.log("The num is positive.");
  }
} else {
  console.log("The num is negative.");
}
// ---------programiz.exp11
if (num % 2 == 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

var result = num % 2 == 0 ? "even" : "odd";
console.log(`The num is ${result}`);
