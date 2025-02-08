let myWin;
function openWin() {
  myWin = window.open("http://www.google.com", "", "width=400 , height=400");
}

function moveWin() {
  myWin.moveTo(500, 100);
}
function resizeWin() {
  myWin.resizeTo(250, 200);
}
// -----------------------------navigator
let navigator1 = document.querySelector(".navigator");
navigator1.innerHTML = `cookiesEnabled is ${
  navigator.cookieEnabled
} <br> navigator.appName is ${
  navigator.appName
} <br> navigator.appCodeName is ${navigator.appCodeName} 
<br> navigator.product is ${navigator.product} <br> navigator version is ${
  navigator.appVersion
} <br> navigator userAgent is ${
  navigator.userAgent
} <br> navigator platform is ${navigator.platform} <br> navigator language is ${
  navigator.language
} <br> navigator is onLine : ${
  navigator.onLine
} <br>navigator java is Enabled : ${navigator.javaEnabled()}`;
