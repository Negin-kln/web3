// ---------programiz.exp21
function sum() {
  var number = Number(prompt("enter a positive number: "));
  var sum = 0;
  for (var i = 1; i <= number; i++) {
    sum += i;
  }
  console.log("The sum of natural numbers:", sum);
}
sum();
function sumWhile() {
  var number = Number(prompt("enter a positive number: "));
  var sum = 0,
    i = 1;
  while (i <= number) {
    sum += i;
    i++;
  }
  console.log("The sum of natural numbers:", sum);
}
sumWhile();
