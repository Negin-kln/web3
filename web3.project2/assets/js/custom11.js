// ---------programiz.exp6
var a = Number(prompt("pleace enter a"));
var b = Number(prompt("pleace enter b"));
var c = Number(prompt("pleace enter c"));

var root1;
var root2;
var discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  console.log(`root1 = ${root1} , root2 = ${root2}`);
} else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);
  console.log(`root1 = ${root1} , root2 = ${root2}`);
} else {
  var realPart = (-b / (2 * a)).toFixed(2);
  var imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
  console.log(
    ` The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
