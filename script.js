let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

document.querySelector(".prev-button").addEventListener("click", () => {
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
});

document.querySelector(".next-button").addEventListener("click", () => {
  slideIndex += 1;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
});

showSlides();
