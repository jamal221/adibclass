let ProductSelected=1;
let counter=0;
let courseIDselcted=[];
function addCard(btnThisCard){
  
  let courseData="";
    const course = btnThisCard.closest("li");
    let courseImg = course.querySelector("img").src;
    const courseName = course.querySelector("h2").textContent;
    const coursePrice = course.querySelector(".course-price").innerHTML;
    const courseId = btnThisCard.id;
    courseData = {// تعریف متغییر json در javascript
      name: courseName,
      price: coursePrice,
      imageSrc: courseImg,
      id: courseId,
    };
    localStorage.setItem(`courseList${courseId}`, JSON.stringify(courseData));
    // updateCartNumber()
  // });
  const GetCourse = localStorage.getItem(`courseList${courseId}`);

  localStorage.setItem("ProductSelected", ProductSelected);
  document.getElementById("cart-button-number").style.display="block";
  const CardSelect = localStorage.getItem("ProductSelected");
  document.getElementById("cart-button-number").innerHTML=CardSelect;
  console.log({
    // "singupCourses":singupCourses[0],
    "btnThisCard":btnThisCard,
    "courseData": courseData,
    "GetCourse":GetCourse
     })
     ProductSelected++;
   
  }
function clearCard(){
 
  localStorage.clear();
  document.getElementById("cart-button-number").innerHTML="";
 
  document.getElementById("cart-button-number").style.display="none";
  $('#cart-button-number').load('#cart-button-number > *');  

  //  console.log({
  //   "ProductSelected":localStorage.getItem("ProductSelected")
  // })
}

function showCardWindowsLoad(){
  if(localStorage.ProductSelected){
    document.getElementById("cart-button-number").innerHTML=localStorage.getItem("ProductSelected");
    document.getElementById("cart-button-number").style.display="block";
  }
}