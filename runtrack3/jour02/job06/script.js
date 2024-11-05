const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];
let konamiPosition = 0;

function handleKeyPress(event) {
    // Vérifier si la touche pressée correspond à celle attendue dans la séquence
    if (event.key === konamiCode[konamiPosition]) {
        konamiPosition++;

        // Si toute la séquence a été correctement saisie
        if (konamiPosition === konamiCode.length) {
            activateBlueTheme();
            konamiPosition = 0; // Réinitialiser après activation
        }
    } else {
        konamiPosition = 0; // Réinitialiser si la séquence est incorrecte
    }
}

// Fonction pour activer le thème bleu
function activateBlueTheme() {
    document.body.classList.add("blue-theme"); // Ajouter la classe blue-theme
    document.getElementById("message").textContent = "Thème bleu activé !";
}

// Écouter les événements de touches sur tout le document
document.addEventListener("keydown", handleKeyPress);
