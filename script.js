const prev = document.querySelector(".prev-button");
const next = document.querySelector(".next-button");
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");
let currentIndex = 0;

prev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  slideCarousel();
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  slideCarousel();
});

function slideCarousel() {
  const imageWidth = images[0].clientWidth;
  const offset = -currentIndex * imageWidth;
  applyTransform(offset);

  if (isAtEdge()) {
    resetCarousel();
  }
}

function applyTransform(offset) {
  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform = `translateX(${offset}px)`;
}

function isAtEdge() {
  return currentIndex === 0 || currentIndex === images.length;
}

function resetCarousel() {
  setTimeout(() => {
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(0px)`;
    currentIndex = 0;
    setTimeout(() => {
      carousel.style.transition = "transform 0.4s ease";
    });
  }, 500);
}
