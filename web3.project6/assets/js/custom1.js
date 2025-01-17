// -------------------Image
function btnImage1() {
  document.getElementById("image").src = "../assets/image/bahar.webp";
}
function btnImage2() {
  document.getElementById("image").src = "../assets/image/tabestan.jfif";
}
function btnImage3() {
  document.getElementById("image").src = "../assets/image/payiz.jpg";
}
function btnImage4() {
  document.getElementById("image").src = "../assets/image/zemestan.jpg";
}
// ------------------click
function handlerClick() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  if (name == "")
    document.getElementsByClassName("nameText")[0].innerHTML =
      "لطفا نام کاربری خود را وارد کنید";
  else document.getElementsByClassName("nameText")[0].innerHTML = "";
  if (password == "")
    document.getElementsByClassName("passwordText")[0].innerHTML =
      "لطفا پسورد خود را وارد کنید";
  else if (password < 1000 || password > 10000)
    document.getElementsByClassName("passwordText")[0].innerHTML =
      "پسورد شما اشتباه است!";
  else document.getElementsByClassName("passwordText")[0].innerHTML = "";
}
