var stds = [
  { name: "negin", age: 25 },
  { name: "kimia", age: 32 },
  { name: "mahsa", age: 18 },
];
var editingIndex = -1;
function fillTable() {
  let stdsTable = document.getElementById("stds");
  stdsTable.innerHTML = `<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Actions</th>
  </tr>`;
  for (let i = 0; i < stds.length; i++) {
    stdsTable.innerHTML += `<tr>
      <td>${i}</td>
      <td>${stds[i].name}</td>
      <td>${stds[i].age}</td>
      <td>
        <button onclick="editStd(${i})" class="edit">Edit</button>
        <button onclick="deleteStd(${i})" class="delete">Delete</button>
      </td>
    </tr>`;
  }
}
fillTable();

function addOrUpdateStds() {
  let stdName = document.getElementById("name").value;
  let stdAge = document.getElementById("age").value;
  if (editingIndex === -1) {
    stds.push({ name: stdName, age: parseInt(stdAge) });
  } else {
    stds[editingIndex] = { name: stdName, age: parseInt(stdAge) };
    editingIndex = -1;
  }
  fillTable();
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
}

function editStd(index) {
  document.getElementById("name").value = stds[index].name;
  document.getElementById("age").value = stds[index].age;
  editingIndex = index;
}

function deleteStd(index) {
  stds.splice(index, 1);
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
