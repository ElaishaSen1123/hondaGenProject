let currentIndex = 0;
const images = document.querySelectorAll(".gallery-img");
const totalImages = images.length;

function updateCarousel() {
  const carouselContainer = document.querySelector(".carousel-container");
  const imageWidth = images[0].clientWidth; // Get the width of one image
  carouselContainer.style.transform = `translateX(${
    -currentIndex * imageWidth
  }px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages; // Loops back to 0 after last image
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loops back to last image if at the start
  updateCarousel();
}
