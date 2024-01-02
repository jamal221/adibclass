//! Coderna || ساخته شده توسط کدرنا
//? T.me/coderna_js
//  :) حمایت یادتون نره  //

const sideMenuList = document.querySelector(".sidebar-container .menu-list");
const sideBar = document.querySelector(".sidebar-container");

// باز و بسته شدن منو
function openMenu() {
  sideMenuList.style.display = "flex";
  sideBar.style.transform = "translateX(0)";
}

function closeMenu() {
  sideBar.style.transform = "translateX(30rem)";
}
////////////////////


const cartList = document.querySelector(".cart-list");

function updateCartNumber() {
    const coursesSaved = Object.keys(localStorage).filter(item=>{
      if (item.includes("itemList")) {
        return item
      }
    })
  console.log(coursesSaved);
  const coursesSavedNumber = coursesSaved.length;
  const cartNumber = document.querySelector(".cart-button-number")
  cartNumber.style.display = "flex"
  cartNumber.textContent = coursesSavedNumber;
}

window.addEventListener("DOMContentLoaded", () => {
  const coursesSavedNumber = Object.keys(localStorage).length;
  if (coursesSavedNumber !== 0) {
    updateCartNumber();
  }
  paymentBoxUpdates();
  const courseItems = Object.keys(localStorage).filter(item=>{
    if (item.includes("itemList")) {
      return item
    }
  })
  courseItems.forEach((item) => {
    const itemData = JSON.parse(localStorage.getItem(item));
    
    const liElement = document.createElement("li");
    liElement.className = "align cart-item";
    liElement.innerHTML = `<div class="cart-item-right">
        <div class="cart-item-right-img">
          <img
            class="cart-item-img"
            src="${itemData.imageSrc}"
            alt=""
          />
        </div>

        <div class="cart-item-right-text">
          <p>${itemData.name}</p>
          <p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="w-4 h-4 text-secondary-600"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6 10.5l-2.939 1.545.561-3.272-2.377-2.318 3.286-.478L18 14l1.47 2.977 3.285.478-2.377 2.318.56 3.272L18 21.5z"
                ></path>
              </g>
            </svg>
            مدرس دوره: عرشیا جعفرنژاد
          </p>
        </div>
      </div>

      <div class="align cart-item-left">
        <button onclick="removeFromCart(event)" id="${itemData.id}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
            />
          </svg>
        </button>
        <p><span>${itemData.price}</span>تومان</p>
        </div>`;
    cartList.appendChild(liElement);
  });
});

function removeFromCart(event) {
  localStorage.removeItem(`itemList${event.target.id}`);
  location.reload();
}

const allPriceTag = document.querySelector(".all-price");
const discountAmount = document.querySelector(".discount-amount");
const paymentAmount = document.querySelector(".payment-amount");

const faNums = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const enNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let allPrices = 0;


// تبدیل عدد فارسی به انگلیسی
function faToEn(num) {
  let enOutput = [];
  const characters = `${num}`.split("");
  characters.forEach((item) => {
    if (item !== ",") {
      enOutput.push(enNums[faNums.indexOf(item)]);
    }
  });
  return +enOutput.join("");
}

// بدیل عدد انگلیسی به فارسی
function enToFa(num) {
  let faOutput = [];
  const characters = `${num}`.split("");
  characters.forEach((item) => {
    if (item !== ",") {
      faOutput.push(faNums[enNums.indexOf(item)]);
    }
  });
  return faOutput.join("");
}

// بخش کد تخفیف////////
const discountInput = document.querySelector(
  ".price-discount .input-container input"
);
let discountCodes = { codernaJS: 15000, x: 100000 };
let discountAccepted = 0;
function checkCode(event) {
  event.preventDefault();
  const code = discountInput.value;
  const codeStatusTag = document.querySelector(".code-status")
  document.querySelector(".input-container").style.marginBottom = "12px"
  if (Object.keys(discountCodes).includes(code)) {
    discountAccepted = discountCodes[code];
    paymentBoxUpdates();
    codeStatusTag.textContent = "کد تخفیف اعمال شد"
    codeStatusTag.style.color = "green";
  } else {
    codeStatusTag.textContent = "کد تخفیف معتبر نیست "
    codeStatusTag.style.color = "red";
  }
}
/////////////////////////////

// آپدیت مقادیر باکس اطلاعات پرداخت
function paymentBoxUpdates() {
  allPrices = 0;
  const coursesSaved = Object.keys(localStorage).filter(item=>{
    if (item.includes("itemList")) {
      return item
    }
  })
  coursesSaved.forEach((item) => {
    const itemPriceFa = JSON.parse(localStorage.getItem(item)).price;
    allPrices += faToEn(itemPriceFa);
  });
  allPriceTag.textContent = enToFa(allPrices) + " تومان";
  const discountAmount = document.querySelector(".discount-amount");
  if (allPrices !== 0) {
    discountAmount.textContent = discountAccepted;
  }
  const priceToPay = allPrices - discountAmount.textContent;

  if (allPrices === 0) {
    document.querySelector(".payment-amount").textContent = "۰" + " تومان";
    discountAmount.textContent = "۰" + " تومان";
  }else {
    discountAmount.textContent = enToFa(discountAmount.textContent) + " تومان";
    document.querySelector(".payment-amount").textContent =
      enToFa(priceToPay) + " تومان";
  }
}
//////////////////////////////