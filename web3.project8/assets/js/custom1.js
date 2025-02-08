let click1 = document.getElementById("ht");
let checkbox1 = document.getElementById("check");
let selected1 = document.getElementById("city");
let r1 = document.getElementById("female");
let r2 = document.getElementById("male");
let rm = document.getElementById("empty");
function lightMode() {
  click1.classList.remove("dark");
}
function darkMode() {
  click1.classList.add("dark");
}
selected1.addEventListener("change", function (event) {
  console.log("محل تولد:", event.target.value);
});
function submit1() {
  if (checkbox1.checked == 0) {
    document.getElementsByClassName("checker")[0].innerHTML =
      "**لطفا قوانین را تایید کنید!**";
  }
  if (r1.checked) console.log(`gender = female`);
  else if (r2.checked) console.log(`gender = male`);
  else rm.innerHTML = "**یکی از موارد را انتخاب کنید!**";
}
