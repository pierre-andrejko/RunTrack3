// Sélection des éléments HTML
const showTextBtn = document.getElementById("showTextBtn");
const hideTextBtn = document.getElementById("hideTextBtn");
const textContainer = document.getElementById("textContainer");

// Ajout d'un événement de clic pour afficher le texte
showTextBtn.addEventListener("click", () => {
    textContainer.style.display = "block"; // Affiche la div
});

// Ajout d'un événement de clic pour cacher le texte
hideTextBtn.addEventListener("click", () => {
    textContainer.style.display = "none"; // Cache la div
});
