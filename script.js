let currentIndex = 0;
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function showSlide(index) {
    // Ensure index stays within bounds
    if (index < 0) {
        currentIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    // Update slider position
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);