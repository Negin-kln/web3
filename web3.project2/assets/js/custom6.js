var role = prompt("enter your role");
switch (role) {
  case "admin":
    console.log("You have full access to the information");
    break;
  case "user":
    console.log("Access to the site is free for you");
    break;
  case "not user":
    console.log("Limited access to the site");
    break;
  default:
    console.log("not valid");
}
