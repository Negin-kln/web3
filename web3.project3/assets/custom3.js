// ---------programiz.exp17
function fibonacci() {
  var number = parseInt(prompt("Enter the number of terms: "));
  var n1 = 0,
    n2 = 1,
    nextTerm;
  console.log("Fibonacci Series:");
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
fibonacci();
function fibonacciCertainNumber() {
  var number = parseInt(prompt("Enter a positive number: "));
  var n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");
  console.log(n1);
  console.log(n2);

  nextTerm = n1 + n2;

  while (nextTerm <= number) {
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
}
fibonacciCertainNumber();
