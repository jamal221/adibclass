let ProductSelected=1;
let counter=0;
let courseIDselcted=[];
function addCard(btnThisCard){
  let courseData="";
  // const singupCourses = document.querySelectorAll(".price-payment button");

  // singupCourses[0].addEventListener("click", (event) => {
    // alert("hello");
    const course = btnThisCard.closest("li");
    let courseImg = course.querySelector("img").src;
    const courseName = course.querySelector("h2").textContent;
    const coursePrice = course.querySelector(".course-price").innerHTML;
    const courseId = btnThisCard.id;
    courseData = {
      name: courseName,
      price: coursePrice,
      imageSrc: courseImg,
      id: courseId,
    };

    localStorage.setItem(`courseList${courseId}`, JSON.stringify(courseData));
    // updateCartNumber()
  // });
  const GetCourse = localStorage.getItem(`courseList${courseId}`);

  // if(localStorage.ProductSelected){
  //   ProductSelected++;
  // }
  // else{
  //   ProductSelected=1;
  // }
  localStorage.setItem("ProductSelected", ProductSelected);
  document.getElementById("cart-button-number").style.display="block";
  const CardSelect = localStorage.getItem("ProductSelected");
  document.getElementById("cart-button-number").innerHTML=CardSelect;
  const liInfo=document.querySelector("h2.p1");
  // nameCours=liInfo.querySelector("h2").textContent;
  console.log({
    // "singupCourses":singupCourses[0],
    "btnThisCard":btnThisCard,
    "courseData": courseData,
    "GetCourse":GetCourse
     })
   
  }
function clearCard(){
  console.log({
    "ProductSelected":localStorage.getItem("ProductSelected")
  })
  // localStorage.clear();
  // document.getElementById("cart-button-number").innerHTML="";
  localStorage.clear();
  document.getElementById("cart-button-number").style.display="none";
  $('#cart-button-number').load('#cart-button-number > *')  
  // if(localStorage.ProductSelected){
  //   // localStorage.removeItem("ProductSelected");
  //   localStorage.clear();
  //   document.getElementById("cart-button-number").innerHTML="";
  //   document.getElementById("cart-button-number").style.display="none";

  // }else{
  //   alert(" فعلا کارتی عریف نشده اشت")
  // }
}

function showCardWindowsLoad(){
  if(localStorage.ProductSelected){
    document.getElementById("cart-button-number").innerHTML=localStorage.getItem("ProductSelected");
    document.getElementById("cart-button-number").style.display="block";
  }
}