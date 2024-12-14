var age = Number(prompt("pleace enter your age"));
if (age > 0 && age < 18) {
  console.log("You are not authorized to use this site");
} else if (age >= 18) {
  console.log("welcome!");
} else {
  console.log("not valid");
}
