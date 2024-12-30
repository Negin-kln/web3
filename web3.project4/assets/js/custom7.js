// ----------sidenav
function showSidenav() {
  let sidenav = document.getElementById("sidenav");
  sidenav.style.right = "0px";
}
function hiddenSidenav() {
  let sidenav = document.getElementById("sidenav");
  sidenav.style.right = "-300px";
}
// ----------model
function showModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "block";
}
function hiddenModal() {
  let modal = document.getElementById("modal");
  modal.style.display = "none";
}
// ----------the counter
function counterUp() {
  let counterUp = parseInt(document.getElementById("count").innerText);
  counterUp = counterUp + 1;
  document.getElementById("count").innerText = counterUp;
}
function counterDown() {
  let counterDown = parseInt(document.getElementById("count").innerText);
  counterDown = counterDown - 1;
  document.getElementById("count").innerText = counterDown;
}
