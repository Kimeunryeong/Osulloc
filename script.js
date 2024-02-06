let observer = new IntersectionObserver((entries) => {
  entries.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
    } else {
      box.target.style.opacity = 0;
    }
  });
});


let introBoxes = document.querySelectorAll('.introBox');

observer.observe(introBoxes[0]);
observer.observe(introBoxes[1]);
observer.observe(introBoxes[2]);
observer.observe(introBoxes[3]);
observer.observe(introBoxes[4]);

