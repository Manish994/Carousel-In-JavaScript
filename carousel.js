//Select Carousel
const carousel = document.querySelector(".carousel");

//Select all the slides inside carousel
//Selection using spread operator
const slides = [...carousel.children];

//Calculate the slideWidth
const slideWidth = slides[0].getBoundingClientRect().width;

//Position the slides horizontally
function positionSlides(slides) {
  for (let index = 0; index < slides.length; index++) {
    slides[index].style.left = slideWidth * index + "px";
  }
}
positionSlides(slides);
