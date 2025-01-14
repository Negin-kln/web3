var stds = [
  { name: "negin", age: 25 },
  { name: "kimia", age: 32 },
  { name: "mahsa", age: 18 },
];
function fillTable() {
  let stdsTable = document.getElementById("stds");
  stdsTable.innerHTML = `<tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
    </tr>`;
  for (let i = 0; i < stds.length; i++) {
    stdsTable.innerHTML += `<tr>
      <td>${i}</td>
      <td>${stds[i].name}</td>
      <td>${stds[i].age}</td>
    </tr>`;
  }
}
fillTable();
function addStds() {
  let stdName = document.getElementById("name").value;
  let stdAge = document.getElementById("age").value;
  stds.push({ name: stdName, age: parseInt(stdAge) });
  fillTable();
}
function calcAge() {
  let maxAge = stds[0].age;
  let minAge = stds[0].age;
  let sumAge = 0;
  for (let i = 0; i < stds.length; i++) {
    if (maxAge < stds[i].age) {
      maxAge = stds[i].age;
    }
    if (minAge > stds[i].age) {
      minAge = stds[i].age;
    }
    sumAge += stds[i].age;
  }
  let averageAge = sumAge / stds.length;
  document.getElementById(
    "resultAverageAge"
  ).innerHTML = `average = ${averageAge}`;
  document.getElementById("resultMaxAge").innerHTML = `max = ${maxAge}`;
  document.getElementById("resultMinAge").innerHTML = `min = ${minAge}`;
}
