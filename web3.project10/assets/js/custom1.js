// promises in js
let p = new Promise((resolve, reject) => {
  const a = 1 + 2;
  if (a == 2) resolve("success");
  else reject("failed");
});
p.then((message) => {
  console.log(`this is ${message} message.`);
}).catch((message) => {
  console.log(`this is ${message} message.`);
});
function myDisplaye(some) {
  let result = document.getElementById("demo");
  result.innerHTML = some;
}
let p1 = new Promise((resolve, reject) => {
  let x = 0;
  if (x == 0) resolve("Ok");
  else reject("Error");
});
p1.then(
  function (value) {
    myDisplaye(value);
  },
  function (error) {
    myDisplaye(error);
  }
);
setTimeout(function () {
  myFunction("hello");
}, 3000);
function myFunction(value) {
  document.getElementById("demo1").innerHTML = value;
}
let p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("it is good.");
  }, 3000);
});
p2.then(function (value) {
  document.getElementById("demo2").innerHTML = value;
});
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open("GET", "http://127.0.0.1:3000/src/blogs");
  req.onload = function () {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
