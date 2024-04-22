let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item');
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }
  currentIndex = index;
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${100 * index}%)`;
  });
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

showSlide(currentIndex);
