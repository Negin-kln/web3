// ---------programiz.exp22
function digit() {
  var a = prompt("Enter a first integer: ");
  var b = prompt("Enter a second integer: ");
  var c = prompt("Enter a third integer: ");
  var result1 = a % 10;
  var result2 = b % 10;
  var result3 = c % 10;
  if (result1 == result2 && result1 == result3) {
    console.log(`${a}, ${b} and ${c} have the same last digit.`);
  } else {
    console.log(`${a}, ${b} and ${c} have different last digit.`);
  }
}
digit();
