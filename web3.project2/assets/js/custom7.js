var role = prompt("enter your role");
switch (role) {
  case "school principal":
    console.log(
      "Access to the information of teachers and students is enabled for you"
    );
    break;
  case "teacher":
    console.log("Access to student information is enabled for you");
    break;
  case "student":
    console.log("Access to your own information is enabled for you");
    break;
  default:
    console.log("not valid");
}
