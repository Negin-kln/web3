function calc() {
  let val1 = parseInt(document.getElementById("num1").value);
  let val2 = parseInt(document.getElementById("num2").value);
  document.getElementsByClassName(
    "result"
  )[0].innerHTML = `${val1} + ${val2} = ${val1 + val2}<br>`;
  document.getElementsByClassName(
    "result"
  )[0].innerHTML += `${val1} - ${val2} = ${val1 - val2} <br>`;
  document.getElementsByClassName(
    "result"
  )[0].innerHTML += `${val1} * ${val2} = ${val1 * val2} <br>`;
  document.getElementsByClassName(
    "result"
  )[0].innerHTML += `${val1} / ${val2} = ${
    Math.floor((val1 / val2) * 100) / 100
  } <br>`;
}
