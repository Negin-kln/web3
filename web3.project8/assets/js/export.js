const person = {
  name: "negin",
  lastName: "kalantari",
  age: 25,
  phone: "09189631873",
};
let months = ["Jan", "Feb", "Mar", "Apr", "Aug", "Sep", "Oct", "Nov", "Dec"];
const time = new Date();
export default class User {
  constructor(name) {
    this.name = name;
  }
}
function sayHi(user) {
  alert(`Hello, ${user}!`);
}
function sayBye(user) {
  alert(`Bye, ${user}!`);
}
function walk() {
  console.log("walk");
}
//ان توابعی را که میخواهیم در جایی دیگر استفاده کنیم
//export
//می کنیم
export { months, time, sayHi, sayBye };
