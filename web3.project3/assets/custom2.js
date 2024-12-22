// ---------programiz.exp16
function factTen() {
  var number = parseInt(prompt("please enter an integer: "));
  for (let i = 1; i <= 10; i++) {
    var result = i * number;
    console.log(`${number} * ${i} = ${result}`);
  }
}
factTen();
function factRange() {
  var number = parseInt(prompt("please enter an integer: "));
  var range = parseInt(prompt("please enter a range: "));
  for (let i = 1; i <= range; i++) {
    var result = i * number;
    console.log(`${number} * ${i} = ${result}`);
  }
}
factRange();
