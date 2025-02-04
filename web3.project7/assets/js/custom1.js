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
let products = [
  {
    id: 10,
    image: "assets/image/1.webp",
    name: "لپ تاپ 15.6 اینچی اچ‌ پی",
    price: 54000000,
    inventory: 15,
  },
  {
    id: 11,
    image: "assets/image/2.webp",
    name: "لپ تاپ 15.6 اینچی ایسوس",
    price: 34700000,
    inventory: 12,
  },
  {
    id: 12,
    image: "assets/image/3.webp",
    name: "لپ تاپ 16 اینچی ایسر",
    price: 109000000,
    inventory: 5,
  },
  {
    id: 14,
    image: "assets/image/4.webp",
    name: "لپ تاپ 13.6 اینچی اپل",
    price: 76699000,
    inventory: 1,
  },
  {
    id: 15,
    image: "assets/image/5.webp",
    name: "لپ تاپ 15.6 اینچی لنوو",
    price: 40890000,
    inventory: 7,
  },
  {
    id: 18,
    image: "assets/image/6.webp",
    name: " لپ تاپ 15.6 اینچی ام اس آی",
    price: 40890000,
    inventory: 2,
  },
];
document.getElementsByClassName("container")[0] = "";
let boxProducts = document.getElementsByClassName("container")[0];
for (let item of products) {
  boxProducts.innerHTML += `<div class="box">
          <img src="${item.image}" alt="laptop-photo" />
          <div class="box-details">
            <h2>${item.name}</h2>
            <div class="flex-row2">
              <span style="padding-left: 5px; color: #101a5c">تومان</span
              ><span style="color: #7582d5">${item.price}</span>
              <span class="addbasket"></span>
            </div>
             <div style="color:red;text-align:center;font-size:14px; padding-top:5px">موجودی انبار ${item.inventory}</div>
            <div class="flex-row">
              <button class="addBtn" onclick="addBasket(${item.id})"">
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
              </button>
              <input type="text" readonly value="0" data-id="${item.id}" />
              <button class="minusBtn" onclick="minusBasket(${item.id})">
                <i class="fa fa-arrow-down" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>`;
}
let basket = [];
function addBasket(id) {
  let clickProduct = products.find(function (item) {
    return item.id == id;
  });

  let basketProductIndex = basket.findIndex(function (item) {
    return item.id == id;
  });
  if (basketProductIndex == -1) {
    updateInput(clickProduct.id, 1);
    clickProduct.count = 1;
    basket.push(clickProduct);
  } else {
    if (
      basket[basketProductIndex].count >= basket[basketProductIndex].inventory
    ) {
      console.log("not inventory");
    } else {
      basket[basketProductIndex].count += 1;
      updateInput(clickProduct.id, basket[basketProductIndex].count);
    }
  }
  updateTable();
}
function minusBasket(id) {
  let basketProductIndex = basket.findIndex(function (item) {
    return item.id == id;
  });
  if (basketProductIndex == -1) {
    console.log("this product isnt available in basket");
  } else {
    if (basket[basketProductIndex].count > 0) {
      basket[basketProductIndex].count -= 1;
      updateInput(
        basket[basketProductIndex].id,
        basket[basketProductIndex].count
      );
    }

    if (basket[basketProductIndex].count == 0) {
      basket.splice(basketProductIndex, 1);
      updateInput(basket[basketProductIndex].id, 0);
    }
  }
  updateTable();
}

function updateInput(id, val) {
  document.querySelector(`[data-id="${id}"]`).value = val;
}

function updateTable() {
  let tb = document.querySelector("table tbody");
  let totalPrice = 0;
  tb.innerHTML = "";
  for (let item of basket) {
    tb.innerHTML += `<tr><td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>${item.count}</td>
                        <td>${item.price * item.count}</td></tr>`;
    totalPrice += item.price * item.count;
  }
  if (totalPrice >= 300000000) {
    document.querySelector(
      "table tfoot"
    ).innerHTML = `<tr><td>قیمت نهایی</td><td>${totalPrice}</td><td>خرید های بالای 300 میلیون با تخفیف 10%</td><td colspan="3">${
      totalPrice - (totalPrice * 10) / 100
    }</td></tr>`;
  } else {
    document.querySelector(
      "table tfoot"
    ).innerHTML = `<tr><td>totla price</td><td colspan="4">${totalPrice}</td></tr>`;
  }
}
