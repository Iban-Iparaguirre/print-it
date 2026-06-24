const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentIndex = 0;

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

// Création des dots
slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) {
        dot.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dot);
});

// Fonction qui met à jour l'image, le texte et les dots
function updateSlide() {
    // Mise à jour de l'image
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;

    // Mise à jour du texte
    tagLine.innerHTML = slides[currentIndex].tagLine;

    // Mise à jour des dots
    document.querySelector(".dot_selected").classList.remove("dot_selected");
    dotsContainer.children[currentIndex].classList.add("dot_selected");
}

// Clic flèche droite → on avance
arrowRight.addEventListener("click", () => {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0; // Retour à la première slide
    } else {
        currentIndex = currentIndex + 1;
    }
    updateSlide();
});

// Clic flèche gauche
arrowLeft.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    updateSlide();
});