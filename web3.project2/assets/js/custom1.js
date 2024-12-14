var hour = Number(prompt("pleace enter hour"));
if (hour > 0 && hour < 6) {
  console.log("good midnight");
} else if (hour >= 6 && hour < 12) {
  console.log("good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("good afternoon");
} else if (hour >= 18 && hour <= 24) {
  console.log("good night");
} else {
  console.log("not valid");
}
