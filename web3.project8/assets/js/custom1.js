let click1 = document.getElementById("ht");
let checkbox1 = document.getElementById("check");
let selected1 = document.getElementById("city");
let btn1 = document.querySelector("#btn");
let r1 = document.getElementById("female");
let r2 = document.getElementById("male");
let rm = document.getElementById("empty");
function lightMode() {
  click1.classList.remove("dark");
}
function darkMode() {
  click1.classList.add("dark");
}
function clickHandler() {
  //----------selectbox
  console.log(selected1.value);
  console.log(
    document.querySelector(`#city [value = "${selected1.value}"]`).innerHTML
  );
  //----------gender
  if (r1.checked == true) {
    console.log(`gender = female`);
    rm.innerHTML = "";
  } else if (r2.checked == true) {
    console.log(`gender = male`);
    rm.innerHTML = "";
  } else rm.innerHTML = "**یکی از موارد را انتخاب کنید!**";
  //----------rule
  if (checkbox1.checked == 0) {
    document.getElementsByClassName("checker")[0].innerHTML =
      "**لطفا قوانین را تایید کنید!**";
  } else {
    document.getElementsByClassName("checker")[0].innerHTML = "";
  }
}
//---------------------------tab & faq functions
function navbarFn(elm, e) {
  e.preventDefault();
  let navLinks = document.querySelectorAll("nav a");
  for (let item of navLinks) {
    item.classList.remove("active");
  }
  elm.classList.add("active");
  let tadContants = document.querySelectorAll(".tab-contant");
  for (let item of tadContants) {
    item.classList.remove("show");
  }
  let tabId = elm.getAttribute("data-target");
  document.getElementById(tabId).classList.add("show");
}
function faqFn(elm, e) {
  e.preventDefault();
  let faqTexts = document.querySelectorAll(".faq-contant");
  for (let item of faqTexts) {
    item.classList.remove("show");
    console.log(item);
  }
  let faqLines = elm.getAttribute("data-target");
  console.log(elm.getAttribute("data-target"));
  document.getElementById(faqLines).classList.add("show");
  console.log(elm.getAttribute("data-target"));
}
