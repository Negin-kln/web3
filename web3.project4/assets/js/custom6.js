// --------------Identifying triangles with two sides and one angle
let a = parseInt(prompt("please enter The first side: "));
let b = parseInt(prompt("please enter The second side: "));
let angleC = parseFloat(prompt("please enter The angle between a and b: "));
let angleCInRadians = (angleC * Math.PI) / 180;
let c = Math.round(
  Math.sqrt(a ** 2 + b ** 2 - 2 * a * b * Math.cos(angleCInRadians))
);
console.log(`a=${a}, b=${b} , c=${c}  `);
if (a === b && a === c) {
  console.log("متساوی الاضلاع");
} else if (a === b || a === c || b === c) {
  console.log("متساوی الساقین");
} else if (angleC === 90) {
  console.log("قائم الزاویه");
} else {
  console.log("این مثلث جزو مثلث های خاص نمی باشد.");
}
// --------------sum
function sum() {
  let sum = 0;
  for (let num of arguments) {
    sum += num;
  }
  return sum;
}
console.log(sum(8, 5, 6));
// --------------min
function min() {
  let result = arguments[0];
  for (let x of arguments) {
    if (x < result) {
      result = x;
    }
  }
  console.log(`minNumber is ${result}`);
}
min(7, -5.2, 19, -9);
