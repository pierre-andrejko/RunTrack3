const shuffleButton = document.getElementById("shuffleButton");
const rainbowContainer = document.getElementById("rainbowContainer");
const resultMessage = document.getElementById("resultMessage");

// Liste dns le bon ordre
const imagesOrder = [
    { src: "arc1.png", color: "rouge" },
    { src: "arc2.png", color: "orange" },
    { src: "arc3.png", color: "jaune" },
    { src: "arc4.png", color: "vert" },
    { src: "arc5.png", color: "bleu" },
    { src: "arc6.png", color: "violet" }
];

// stocker les images mélangées
let shuffledImages = [...imagesOrder];

// Fonction pour afficher les images
function displayImages(images) {
    rainbowContainer.innerHTML = "";
    images.forEach((image, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.dataset.color = image.color;
        imgElement.draggable = true;

        // dragndrop
        imgElement.addEventListener("dragstart", (e) => dragStart(e, index));
        imgElement.addEventListener("dragover", dragOver);
        imgElement.addEventListener("drop", (e) => drop(e, index));

        rainbowContainer.appendChild(imgElement);
    });
}

// mélanger et vérifier les images
function shuffleImages() {
    shuffledImages = [...shuffledImages].sort(() => Math.random() - 0.5);
    displayImages(shuffledImages);
}

function checkOrder() {
    const isCorrect = shuffledImages.every((img, index) => img.color === imagesOrder[index].color);
    resultMessage.textContent = isCorrect ? "Vous avez gagné" : "Vous avez perdu";
    resultMessage.className = isCorrect ? "success" : "failure";
}

// Fonctions pour le glisser-déposer
let draggedIndex = null;

function dragStart(e, index) {
    draggedIndex = index;
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e, index) {
    e.preventDefault();
    [shuffledImages[draggedIndex], shuffledImages[index]] = [shuffledImages[index], shuffledImages[draggedIndex]];
    displayImages(shuffledImages);
    checkOrder();
}

shuffleButton.addEventListener("click", shuffleImages);
displayImages(imagesOrder);
