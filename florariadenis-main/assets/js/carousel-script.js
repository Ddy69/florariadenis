document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-ctrl');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    function showSlide(index) {
        if (totalItems === 0) return; // Early exit if no items
        if (index >= totalItems) index = 0;
        if (index < 0) index = totalItems - 1;

        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Automatic slide every 5 seconds
    setInterval(nextSlide, 2500);

    // Add buttons for manual control
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);
    }
});
