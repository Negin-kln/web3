// -------------------------------form
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
function clickHandler(e) {
  e.preventDefault();
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
  //----------hide
  if ((r1.checked == true || r2.checked == true) && checkbox1.checked != 0) {
    let form1 = document.getElementById("form1");
    form1.classList.add("hidden");
    let box = document.getElementById("box");
    box.classList.remove("hidden");
    timer();
  }
}
function timer() {
  let timer = document.getElementById("timer");
  let i = 10;
  timer.innerHTML = i;
  let interval = setInterval(function () {
    if (i <= 10 && i > 0) {
      timer.innerHTML--;
      i--;
    } else {
      clearInterval(interval);
      window.location.assign("http://127.0.0.1:5500/index1.html");
    }
  }, 1000);
  let goHomeBtn = document.getElementById("gohomebtn");
  goHomeBtn.addEventListener("click", function () {
    window.location.assign("http://127.0.0.1:5500/index1.html");
  });
}
//---------------------------tab & faq functions
function navbarFn(elm, e) {
  e.preventDefault();
  let navLinks = document.querySelectorAll("nav a");
  for (let item of navLinks) {
    item.classList.remove("active");
  }
  elm.classList.add("active");
  let tabContants = document.querySelectorAll(".tab-contant");
  for (let item of tabContants) {
    item.classList.remove("show");
  }
  let tabId = elm.getAttribute("data-target");
  document.getElementById(tabId).classList.add("show");
}
let faqId = "";
function faqFn(elm, e) {
  e.preventDefault();
  let faqTexts = document.querySelectorAll(".faq-contant");
  for (let item of faqTexts) {
    item.classList.remove("show");
    console.log(item);
  }
  let faqLines = elm.getAttribute("data-target");
  console.log(elm.getAttribute("data-target"));
  if (faqId != faqLines) {
    document.getElementById(faqLines).classList.add("show");
    faqId = faqLines;
  } else {
    document.getElementById(faqLines).classList.remove("show");
    faqId = "";
  }
}
