// ------------------------export.91(1)
function testVariable(variable) {
  if (variable instanceof Function)
    console.log("The variable is of function type");
  else console.log("The variable is not of function type");
}
const number = 5;
const test = function () {
  console.log("hello");
};
console.log(testVariable(number));
console.log(testVariable(test));
// ------------------------export.91(2)
function testVariable1(variable) {
  if (typeof variable == "function")
    console.log("The variable is of function type");
  else console.log("The variable is not of function type");
}
console.log(testVariable1(number));
console.log(testVariable1(test));
// ------------------------export.91(3)
function testVariable2(variable) {
  if (Object.prototype.toString.call(variable) == "[object Function]")
    console.log("The variable is of function type");
  else console.log("The variable is not of function type");
}
console.log(testVariable2(number));
console.log(testVariable2(test));
// ------------------------export.92
// program to include constants
const a = 5;
console.log(a);
// constants are block-scoped
{
  const a = 50;
  console.log(a);
}
console.log(a);
const arr = ["work", "exercise", "eat"];
console.log(arr);
// add elements to arr array
arr[3] = "hello";
console.log(arr);
// ------------------------export.93(1)
function hello() {
  console.log("hello world!");
}
setTimeout(hello, 3000);
// ------------------------export.93(2)
function hello1(x, y) {
  console.log(x);
  console.log(y);
}
setTimeout(hello1, 3000, "hello", "world!");
// ------------------------export.94
function* iterate(a, b) {
  for (let i = a; i <= b; i += 1) {
    yield i;
  }
}
function range(a, b) {
  if (typeof a === "string") {
    let result = [...iterate(a.charCodeAt(), b.charCodeAt())].map((n) =>
      String.fromCharCode(n)
    );
    console.log(result);
  } else {
    let result = [...iterate(a, b)];
    console.log(result);
  }
}
range(1, 5);
range("A", "G");
// ------------------------export.95(1)
function sum() {
  if (arguments.length == 0) console.log("You have not passed any argument");
  else if (arguments.length == 1) console.log("Pass at least two arguments");
  else {
    let result = 0;
    let length = arguments.length;
    for (let i = 0; i < length; i++) {
      result += arguments[i];
    }
    console.log(result);
  }
}
sum();
sum(1);
sum(1, 2);
sum(1, 2, 3, 4, 5);
// ------------------------export.95(2)
function sum1() {
  switch (arguments.length) {
    case 0:
      console.log("You have not passed any argument");
      break;
    case 1:
      console.log("Pass at least two arguments");
      break;
    default:
      let result = 0;
      let length = arguments.length;
      for (let i = 0; i < length; i++) {
        result += arguments[i];
      }
      console.log(result);
      break;
  }
}
sum1();
sum1(1);
sum1(1, 2);
sum1(1, 2, 3, 4, 5);
// ------------------------export.96
class Stack {
  constructor() {
    this.items = [];
  }
  add(element) {
    return this.items.push(element);
  }
  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length == 0;
  }
  size() {
    return this.items.length;
  }
  clear() {
    this.items = [];
  }
}
let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.items);
stack.remove();
console.log(stack.items);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.clear();
console.log(stack.items);
// ------------------------export.97
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(element) {
    this.items[this.tailIndex] = element;
    this.tailIndex++;
  }
  dequeue() {
    let removedElement = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return removedElement;
  }
  peek() {
    let peekElement = this.items[this.headIndex];
    return peekElement;
  }
  size() {
    return this.tailIndex - this.headIndex;
  }
  isEmpty() {
    if (this.tailIndex - this.headIndex == 0) {
      return true;
    } else {
      return false;
    }
  }
  clear() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
}
let queue = new Queue();
queue.enqueue(8);
queue.enqueue(6);
queue.enqueue(4);
queue.enqueue(2);
console.log("Queue after adding items: ");
console.log(queue.items);
queue.dequeue();
console.log("Queue after deleting the first item:");
console.log(queue.items);
console.log("First item of the queue = " + queue.peek());
queue.clear();
console.log("After clearing the queue: ");
console.log(queue.items);
// ------------------------export.98(1)
function checkNumber(x) {
  if (typeof x == "number" && !isNaN(x)) {
    if (Number.isInteger(x)) console.log(`${x} is integer.`);
    else console.log(`${x} is a float value.`);
  } else console.log(`${x} is not a number`);
}
checkNumber("hello");
checkNumber(44);
checkNumber(3.4);
checkNumber(-3.4);
checkNumber(NaN);
// ------------------------export.98(2)
function checkNumber(x) {
  let regexPattern = /^-?[0-9]+$/;
  let result = regexPattern.test(x);
  if (result) console.log(`${x} is an integer.`);
  else console.log(`${x} is a float value.`);
}
checkNumber(44);
checkNumber(-44);
checkNumber(3.4);
checkNumber(-3.4);
// ------------------------export.99
function greet() {
  return "hello";
}
function name(user, func) {
  let message = func();
  console.log(`${message} ${user}`);
}
name("negin", greet);
// ------------------------export.100
const img = new Image();
img.src = "assets/image/1.jpg";
img.onload = function () {
  console.log("width " + this.width);
  console.log("height " + this.height);
};
// ------------------------export.101(1)
const string = "         hello my name is negin        ";
let result = string.split(" ").join("");
console.log(result);
// ------------------------export.101(2)
function trimString(x) {
  const result = x.replace(/\s/g, "");
  return result;
}

const result1 = trimString(string);
console.log(result1);
// ------------------------export.102
console.log(8);
console.log("hello");
const x = "hello";
console.log(x);
function sayName() {
  return "Hello John";
}
console.log(sayName());
const name1 = "John";
console.log("Hello " + name1);
let obj = {
  name: "John",
  age: 28,
};
console.log(obj);
// ------------------------export.103
const d1 = new Date();
console.log(d1);
const result2 = d1.getTime();
console.log(result2);
