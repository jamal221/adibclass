const cartList = document.querySelector(".cart-list");
let AllPrie = 0;
// window.addEventListener("DOMContentLoaded", () => {
  // alert("hello");
  function toEnDigit(s) {
    return s.replace(/[\u0660-\u0669\u06f0-\u06f9]/g,    // Detect all Persian/Arabic Digit in range of their Unicode with a global RegEx character set
        function(a) { return a.charCodeAt(0) & 0xf }     // Remove the Unicode base(2) range that not match
    )
}
  const courseItems = Object.keys(localStorage).filter(course => {
    if (course.includes("courseList")) {
      console.log({
        "item": course
      })
      return course
    }
  })
  courseItems.forEach((course) => {
    const itemData = JSON.parse(localStorage.getItem(course));

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
    var price = (itemData.price).replace(/,/g, "");
    const price2=toEnDigit(price);
   
    
    AllPrie = AllPrie + parseInt(price2);
    console.log({
      "AllPrie":AllPrie
    })

    // AllPrie=AllPrie+parseInt(price);
  });  //end for
  const e2p = s=>s.replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  AllPrie=new Intl.NumberFormat().format(AllPrie,)
  PersianAllPrie=e2p(AllPrie.toString());
  document.getElementById("TotalPrice").innerHTML=PersianAllPrie;
  document.getElementById("totalPayment").innerHTML=PersianAllPrie;
  // console.log({
  //   " price": AllPrie
  // })
  function ApplyDiscout(inf){
    var codeDisc=inf.value;
    console.log({
      "disCode":codeDisc
    })
    if(codeDisc==123){
    var discount=0.15
      document.getElementById("discount-amount").innerHTML=discount+"درصد";
      var pric=document.getElementById("TotalPrice").innerHTML;
      pric=(pric).replace(/,/g, "");
      pric=pric-discount*pric;
      document.getElementById("totalPayment").innerHTML=new Intl.NumberFormat().format(pric,);
    }else{
      var pric=document.getElementById("TotalPrice").innerHTML;
      pric=(pric).replace(/,/g, "");
      document.getElementById("totalPayment").innerHTML=new Intl.NumberFormat().format(pric-0,);
    }
   
  }
// })