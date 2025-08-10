document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  let currentIndex = 0;

  function updateCarouselHeight() {
    const activeSlide = slides[currentIndex];
    if (activeSlide) {
      carousel.style.height = activeSlide.offsetHeight + 'px';
    }
  }

  function setActiveSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentIndex = index;
    updateCarouselHeight();
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-index'), 10);
      setActiveSlide(index);
    });
  });

  // Initialize
  updateCarouselHeight();

  // Optional: handle window resize to adjust height
  window.addEventListener('resize', updateCarouselHeight);
});
