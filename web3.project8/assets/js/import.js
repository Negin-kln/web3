// ----------------------------------------import
import { sayHi, sayBye } from "./export.js";
sayHi("negin");
sayBye("negin");
import { time as Date } from "./export.js";
document.querySelector(".import").innerHTML = Date;
import User from "./export.js";
let user1 = new User("negin");
console.log(user1.name);
