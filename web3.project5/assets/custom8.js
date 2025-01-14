// -----------Math
const math = {
  factorial: function factorial(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  },
  abs: function abs(n) {
    if (n >= 0) {
      return n;
    } else {
      return n * -1;
    }
  },
  sum: function sum() {
    let sum = 0;
    for (let i of arguments) {
      sum += i;
    }
    return sum;
  },
  max: function max() {
    let max = arguments[0];
    for (let i of arguments) {
      if (i > max) {
        max = i;
      }
    }
    return max;
  },
  min: function min() {
    let min = arguments[0];
    for (let i of arguments) {
      if (i < min) {
        min = i;
      }
    }
    return min;
  },
};
let result = math.factorial(5);
console.log(result);
result = math.abs(-7);
console.log(result);
result = math.sum(8, 16, 22, 32, 52, 70);
console.log(result);
result = math.max(8, 16, 22, 32, 52, 70);
console.log(result);
result = math.min(8, 16, 22, 32, 52, 70);
console.log(result);
// -----------------------Declaration function
function sumD() {
  let sum = 0;
  for (let i of arguments) {
    sum += i;
  }
  return sum;
}
function factorialD(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorialD(n - 1);
  }
}
function absD(n) {
  if (n >= 0) {
    return n;
  } else {
    return n * -1;
  }
}
function maxD() {
  let max = arguments[0];
  for (let i of arguments) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}
function minD() {
  let min = arguments[0];
  for (let i of arguments) {
    if (i < min) {
      min = i;
    }
  }
  return min;
}
console.log(sumD(15, 20, 25, 30));
console.log(factorialD(10));
console.log(absD(-8));
console.log(maxD(15, 20, 25, 30));
console.log(minD(15, 20, 25, 30));
// -----------------------Expression function
let sumEx = function () {
  let sum = 0;
  for (let i of arguments) {
    sum += i;
  }
  return sum;
};
let factorialEx = function (n) {
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
};
let absEx = function (n) {
  if (n >= 0) {
    return n;
  } else {
    return n * -1;
  }
};
let maxEx = function () {
  let max = arguments[0];
  for (let i of arguments) {
    if (i > max) {
      max = i;
    }
  }
  return max;
};
let minEx = function () {
  let min = arguments[0];
  for (let i of arguments) {
    if (i < min) {
      min = i;
    }
  }
  return min;
};
console.log(sumEx(15, 20, 25, 30));
console.log(factorialEx(10));
console.log(absEx(-8));
console.log(maxEx(15, 20, 25, 30));
console.log(minEx(15, 20, 25, 30));
// ----------------------The self-calling function
(function () {
  let sum = 0;
  for (let i of arguments) {
    sum += i;
  }
  console.log(sum);
})(15, 20, 25, 30);
(function (n) {
  let fac = 1;
  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  console.log(fac);
})(10);
(function (n) {
  if (n >= 0) {
    console.log(n);
  } else {
    console.log(n * -1);
  }
})(-8);
(function () {
  let max = arguments[0];
  for (let i of arguments) {
    if (i > max) {
      max = i;
    }
  }
  console.log(max);
})(15, 20, 25, 30);
(function () {
  let min = arguments[0];
  for (let i of arguments) {
    if (i < min) {
      min = i;
    }
  }
  console.log(min);
})(15, 20, 25, 30);
