let currentIndex = 0;

const slides = document.querySelector('.slider-preview-content .slider-preview-slides');
const totalSlides = document.querySelectorAll('.slider-preview-content .slider-preview-slide').length;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);