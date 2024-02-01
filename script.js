// 오설록 인트로 슬라이드 함수
let introEff = document.querySelector(".web-textBox");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log("scrollY", value);
    // value <668 0
    // value > 668 1 
    
  if (value >= 300 && value <= 1300) {
    introEff.style.animation = "slide 1s ease-in-out forwards";
  } else if (value < 299 || value > 1400) {
    introEff.style.animation = "disappear 1s ease-in-out forwards";
  }
});






// // 데스크톱 환경에서 실행될 이벤트 리스너 함수
// function desktopScrollHandler() {
//   console.log('데스크톱 스크롤 위치:', window.scrollY);
//   // 데스크톱 환경에 맞는 스크롤 효과 코드 추가
// }

// // 모바일 환경에서 실행될 이벤트 리스너 함수
// function mobileScrollHandler() {
//   console.log('모바일 스크롤 위치:', window.scrollY);
//   // 모바일 환경에 맞는 스크롤 효과 코드 추가
// }

// // 뷰포트 너비에 따라 적절한 이벤트 리스너 함수를 할당
// if (window.innerWidth >= 768) {
//   window.addEventListener('scroll', desktopScrollHandler);
// } else {
//   window.addEventListener('scroll', mobileScrollHandler);
// }

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
