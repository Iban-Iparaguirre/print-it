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

// Etape 2 - Ajoutez des Event Listeners sur les fleches
let currentIndex = 0;

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

// Etape 3 - Ajoutez des bullet points au slider
slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) {
        dot.classList.add("dot_selected");
    }
    dotsContainer.appendChild(dot);
});

// Etape 4 - Modifiez le slide au clic sur le bouton
function updateSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentIndex].image}`;
    tagLine.innerHTML = slides[currentIndex].tagLine;
    document.querySelector(".dot_selected").classList.remove("dot_selected");
    dotsContainer.children[currentIndex].classList.add("dot_selected");
}

// Etape 2 - Ajoutez des Event Listeners sur les fleches
arrowRight.addEventListener("click", () => {
    console.log("Clic sur la flèche droite");
    // Etape 5 - Mettez en place le défilement infini sur le carrousel
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }
    // Etape 4 - Modifiez le slide au clic sur le bouton
    updateSlide();
});

arrowLeft.addEventListener("click", () => {
    console.log("Clic sur la flèche gauche");
    if (currentIndex === 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    updateSlide();
});
