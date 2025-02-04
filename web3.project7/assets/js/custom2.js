let left1 = 0;
let top1 = 0;
let bottom1 = 0;
let right1 = 0;
let leftSign = 1;
let topSign = 1;
let box = document.querySelector(".box");
let box2 = document.querySelector(".box2");
let title = document.querySelector(".chooseLevel");
let timerElement = document.querySelector(".timer");
let interval;
let timer;
let timeLeft;

function startTimer(duration) {
  timeLeft = duration;
  timerElement.textContent = timeLeft;
  timer = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("زمان شما به پایان رسید!");
      resetGame();
    }
  }, 1000);
}

function resetGame() {
  clearInterval(interval);
  clearInterval(timer);
  box.style.left = "0px";
  box.style.top = "0px";
  box2.style.bottom = "1px";
  box2.style.right = "1px";
  timerElement.textContent = "0";
  title.innerHTML = "Select the game level";
  title.style.color = "black";
  box.style.backgroundColor = "green";
}

function checkCollision() {
  let boxRect = box.getBoundingClientRect();
  let box2Rect = box2.getBoundingClientRect();

  // محاسبه مرکز box1
  let boxCenterX = boxRect.left + boxRect.width / 2;
  let boxCenterY = boxRect.top + boxRect.height / 2;

  // محاسبه مرکز box2
  let box2CenterX = box2Rect.left + box2Rect.width / 2;
  let box2CenterY = box2Rect.top + box2Rect.height / 2;

  // محاسبه فاصله بین دو مرکز
  let distance = Math.sqrt(
    Math.pow(box2CenterX - boxCenterX, 2) +
      Math.pow(box2CenterY - boxCenterY, 2)
  );

  // حد آستانه برای برخورد (مثلاً ۲۰ پیکسل)
  let threshold = 20;

  if (distance < threshold) {
    clearInterval(interval);
    clearInterval(timer);
    alert("تبریک! شما برنده شدید!");
    resetGame();
  }
}

function level1() {
  resetGame();
  title.innerHTML = "level 1";
  title.style.color = "green";
  startTimer(60);
  interval = setInterval(function () {
    left1 += Math.random() * 10 * leftSign;
    top1 += Math.random() * 10 * topSign;
    if (left1 < 0) {
      left1 = 0;
      leftSign = 1;
    }
    if (left1 > 400) {
      left1 = 400;
      leftSign = -1;
    }
    if (top1 < 0) {
      top1 = 0;
      topSign = 1;
    }
    if (top1 > 400) {
      top1 = 400;
      topSign = -1;
    }
    box.style.left = `${left1}px`;
    box.style.top = `${top1}px`;
    checkCollision();
  }, 1000);
}

function level2() {
  resetGame();
  title.innerHTML = "level 2";
  title.style.color = "gold";
  box.style.backgroundColor = "yellow";
  startTimer(60);
  interval = setInterval(function () {
    left1 += Math.random() * 10 * leftSign;
    top1 += Math.random() * 10 * topSign;
    if (left1 < 0) {
      left1 = 0;
      leftSign = 1;
    }
    if (left1 > 400) {
      left1 = 400;
      leftSign = -1;
    }
    if (top1 < 0) {
      top1 = 0;
      topSign = 1;
    }
    if (top1 > 400) {
      top1 = 400;
      topSign = -1;
    }
    box.style.left = `${left1}px`;
    box.style.top = `${top1}px`;
    checkCollision();
  }, 100);
}

function level3() {
  resetGame();
  title.innerHTML = "level 3";
  title.style.color = "red";
  box.style.backgroundColor = "red";
  startTimer(120);
  interval = setInterval(function () {
    left1 += Math.random() * 10 * leftSign;
    top1 += Math.random() * 10 * topSign;
    if (left1 < 0) {
      left1 = 0;
      leftSign = 1;
    }
    if (left1 > 400) {
      left1 = 400;
      leftSign = -1;
    }
    if (top1 < 0) {
      top1 = 0;
      topSign = 1;
    }
    if (top1 > 400) {
      top1 = 400;
      topSign = -1;
    }
    box.style.left = `${left1}px`;
    box.style.top = `${top1}px`;
    checkCollision();
  }, 10);
}

window.onkeydown = function (even) {
  if (even.key == "ArrowUp") {
    bottom1 += 5;
    box2.style.bottom = `${bottom1}px`;
  } else if (even.key == "ArrowDown") {
    bottom1 -= 5;
    box2.style.bottom = `${bottom1}px`;
  } else if (even.key == "ArrowRight") {
    right1 -= 5;
    box2.style.right = `${right1}px`;
  } else if (even.key == "ArrowLeft") {
    right1 += 5;
    box2.style.right = `${right1}px`;
  }
  if (bottom1 < 0) bottom1 = 1;
  if (right1 < 0) right1 = 1;
  if (left1 < 0) left1 = 1;
  checkCollision();
};
