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

//Select Next Button
const nextButton = document.querySelector(".right-btn");

//On right click button, we move(translateX) the carousel to the left position
nextButton.addEventListener("click", function () {
  const currentSlide = carousel.querySelector(".active");
  const nextSlide = currentSlide.nextElementSibling;
  const position = nextSlide.style.left;
  carousel.style.transform = `translateX(-${position})`;
  currentSlide.classList.remove("active");
  nextSlide.classList.add("active");
});

//Select previous button.
const previousButton = document.querySelector(".left-btn");

//On the left button click, we move(translateX) carousel to the right position.
previousButton.addEventListener("click", function () {
  const currentSlide = carousel.querySelector(".active");
  const previousSlide = currentSlide.previousElementSibling;
  const position = previousSlide.style.left;
  carousel.style.transform = `translateX(-${position})`;
  currentSlide.classList.remove("active");
  previousSlide.classList.add("active");
});
