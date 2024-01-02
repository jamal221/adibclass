//! Coderna || ساخته شده توسط کدرنا
//? T.me/coderna_js
//  :) حمایت یادتون نره  //

const sideMenuList = document.querySelector(".sidebar-container .menu-list");
const sideBar = document.querySelector(".sidebar-container");
const sliderContainer = document.querySelector(".slider-container");


// تغییر ظاهر موس در اسلایدر//////////
sliderContainer.addEventListener("mousedown", () => {
  sliderContainer.style.cursor = "grabbing";
  sliderContainer.style.userSelect = "none";
});

const mouseUpHandler = sliderContainer.addEventListener("mouseup", () => {
  document.removeEventListener("mouseup", mouseUpHandler);
  sliderContainer.style.cursor = "grab";
  sliderContainer.style.removeProperty("user-select");
});
//////////////////////////////////

/// باز و بسته شدن منو////////////
function openMenu() {
  sideMenuList.style.display = "flex";
  sideBar.style.transform = "translateX(0)";
}

function closeMenu() {
  sideBar.style.transform = "translateX(30rem)";
}
/////////////////////////////////

// تغییر عدد روی دکمه سبد خرید/////
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
//////////////////////////////////




//  دریافت اطلاعات مربوط به دوره ای که دکمه ثبت نام آن کلیک شده و ارسال اطلاعات به لوکال استوریج

const singupCourses = document.querySelectorAll(".price-payment button");

const allCourses = [
  "flex-grid",
  "git",
  "javascript",
  "reactjs",
  "responsive-web",
  "tailwind",
];

singupCourses.forEach((button) => {
  button.addEventListener("click", (event) => {

    const course = event.target.closest("li");
    let courseImg = course.querySelector("img").src;

    allCourses.forEach((item) => {
      if (courseImg.includes(item)) {
        courseImg = `./assets/img/${item}.svg`;
      }
    });

    const courseName = course.querySelector("h2").textContent;
    const coursePrice = course.querySelector(".course-price").innerHTML;
    const courseId = event.target.id;
    let courseData = {
      name: courseName,
      price: coursePrice,
      imageSrc: courseImg,
      id: courseId,
    };
    localStorage.setItem(`itemList${courseId}`, JSON.stringify(courseData));
    updateCartNumber()
  });
});

window.addEventListener("DOMContentLoaded", ()=>{
  const coursesSavedNumber = Object.keys(localStorage).length;
  if(coursesSavedNumber !== 0){
    updateCartNumber()
  }
})
//////////////////////////////////////