// Fonction pour mettre à jour la couleur du footer en fonction du scroll
function updateFooterColor() {
    // Calculer le pourcentage de scroll de la page
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

    // Calculer la nouvelle couleur en fonction du pourcentage de scroll
    const red = Math.min(255, Math.floor((scrollPercentage / 100) * 255));
    const blue = 255 - red;

    // Mettre à jour la couleur du footer
    const footer = document.getElementById("footer");
    footer.style.backgroundColor = `rgb(${red}, 128, ${blue})`;
}

// Ajouter un écouteur d'événements pour détecter le scroll
window.addEventListener("scroll", updateFooterColor);
