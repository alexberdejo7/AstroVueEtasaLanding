// src/scripts/carousel.js
export function initializeCarousel(carouselSelector, prevButtonSelector, nextButtonSelector) {
    const carousel = document.querySelector(carouselSelector);
    const prevButton = document.querySelector(prevButtonSelector);
    const nextButton = document.querySelector(nextButtonSelector);
    let scrollAmount = 0;

    nextButton.addEventListener('click', () => {
        carousel.scrollTo({
            top: 0,
            left: (scrollAmount += 300),
            behavior: 'smooth'
        });
    });

    prevButton.addEventListener('click', () => {
        carousel.scrollTo({
            top: 0,
            left: (scrollAmount -= 300),
            behavior: 'smooth'
        });
    });
}
