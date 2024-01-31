
// 오설록 인트로 슬라이드 함수
let introEff = document.querySelector(".web-textBox");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);
    // value <668 0
    // value > 668 1 
    
  if (value >= 300 && value <= 1100) {
    introEff.style.animation = "slide 1s ease-in-out forwards";
  } else if (value < 299 || value > 1111) {
    introEff.style.animation = "disappear 1s ease-in-out forwards";
  }
});

// // 티하우스 오퍼시티 함수
// let textBox2 = document.querySelector(".web-textBox2");

// window.addEventListener("scroll", function () {
//   let scrollPosition = window.scrollY;
//   console.log("scrollY", scrollPosition);

//   if (scrollPosition >= 1730 && scrollPosition < 2650) {
//     textBox2.style.opacity = 1;
//   } else {
//     textBox2.style.opacity = 0;
//   }
// });


// 인조이 오설록
// let enjoySection = document.getElementById("enjoy");

// window.addEventListener("scroll", function () {
//   let scrollPosition1 = window.scrollY;

//   if (scrollPosition1 < 6500) {
//     enjoySection.style.opacity = 0;
//   } else {
//     enjoySection.style.opacity = 1;
//   }
// });
