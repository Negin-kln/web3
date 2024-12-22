// ---------programiz.exp18
function armstrong() {
  var sum = 0;
  var number = Number(prompt("enter a three-digit positive integer: "));
  var temp = number;
  while (temp > 0) {
    var remainder = temp % 10;

    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10);
  }
  if (sum == number) {
    console.log(`${number} is an Armstrong number`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
  }
}
armstrong();
function armstrongN() {
  var number = prompt("Enter a positive integer");
  var numberOfDigits = number.length;
  var sum = 0;
  var temp = number;
  while (temp > 0) {
    var remainder = temp % 10;
    sum += remainder ** numberOfDigits;
    temp = parseInt(temp / 10);
  }
  if (sum == number) {
    console.log(`${number} is an Armstrong number`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
  }
}
armstrongN();
// ---------programiz.exp19
function armstrongNumbersBetweenTwoIntervals() {
  var lowNumber = parseInt(prompt("Enter a positive low integer value: "));
  var highNumber = parseInt(prompt("Enter a positive high integer value: "));
  console.log("Armstrong Numbers:");
  for (let i = lowNumber; i <= highNumber; i++) {
    let numberOfDigits = i.toString().length;
    let sum = 0;
    let temp = i;
    while (temp > 0) {
      let remainder = temp % 10;
      sum += remainder ** numberOfDigits;
      temp = parseInt(temp / 10);
    }
    if (sum == i) {
      console.log(i);
    }
  }
}
armstrongNumbersBetweenTwoIntervals();
