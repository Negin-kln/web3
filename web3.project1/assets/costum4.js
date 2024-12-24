var x = [12, [10, 25, 86], 30, 84, [14, -8, [91, 68]]];
console.log(x);
console.table(x);
x[5] = 10;
console.log(x);
delete x[0];
console.log(x);
x[0] = [[10, 15, 19], 12];
console.log(x);
// --------------------------------
for (var i = 2; i < 6; i++) {
  console.count("num");
}
//   ---------------------------------
console.error("this is test error.");
// -----------------------------------
var stds = [
  { firsName: "negin", lastName: "kalantari", age: "25" },
  { firsName: "kimia", lastName: "salehi", age: "26" },
  { firsName: "zeynab", lastName: "sofi", age: "23" },
];
console.log(stds[1]);
console.log(stds);
stds[3] = { firsName: "mahsa", lastName: "fatahi", age: "24" };
//   ---------------------------------
console.error("this is a test error.");
// -----------------------------------
console.group(stds);
console.log(stds);
console.groupCollapsed(stds);
console.log(stds);
console.groupEnd(stds);
console.log(stds);
// -----------------------------------
console.info("this is a test info.");
// -----------------------------------
console.warn("This is a test warning!");
// -----------------------------------
console.log(
  "%cthis is %ca test.",
  "color: red; font-size:20px;",
  "color: orange; font-size:14px;"
);
// -----------------------------------
console.clear();
