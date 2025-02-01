function mouseOver() {
  document.getElementsByClassName("nav-dropdown")[0].style.display = "block";
}
function mouseOut() {
  document.getElementsByClassName("nav-dropdown")[0].style.display = "none";
}
function showLogin() {
  document.getElementsByClassName("form")[0].style.display = "block";
}
function hiddenLogin() {
  document.getElementsByClassName("form")[0].style.display = "none";
}
function showSubmit() {
  document.getElementsByClassName("form")[1].style.display = "block";
}
function hiddenSubmit() {
  document.getElementsByClassName("form")[1].style.display = "none";
}
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function handleLoginFormSubmit(event) {
  event.preventDefault();
  const username = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  setCookie("username", username, 10);
  setCookie("password", password, 10);
  hiddenLogin();
}
function handleSignupFormSubmit(event) {
  event.preventDefault();
  const username = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  localStorage.setItem("phone", phone);
  localStorage.setItem("email", email);
  hiddenSubmit();
}
document
  .getElementsByClassName("frm1")[0]
  .addEventListener("submit", handleLoginFormSubmit);
document
  .getElementsByClassName("frm2")[0]
  .addEventListener("submit", handleSignupFormSubmit);
