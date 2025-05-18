let currentIndex = 0;
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function showSlide(index) {
    // S'assurer que l'index reste dans les limites
    if (index < 0) {
        currentIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Calculer le décalage vertical
    const offset = -currentIndex * 500; // Hauteur d'une image
    slider.style.transform = `translateY(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Défilement automatique toutes les 5 secondes
setInterval(nextSlide, 5000);