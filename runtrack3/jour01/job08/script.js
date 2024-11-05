function estPremier(n) {
    if (n <= 1) return false; // Les nombres inférieurs ou égaux à 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; // Si n est divisible par i, ce n'est pas un nombre premier
    }
    return true;
}

function sommenombrespremiers(a, b) {
    // Vérifier si les deux nombres sont premiers
    if (estPremier(a) && estPremier(b)) {
        return a + b; // Retourne la somme si les deux sont premiers
    } else {
        return false; // Sinon, retourne false
    }
}

// ZONE DE TEST
console.log(sommenombrespremiers(5, 7));
console.log(sommenombrespremiers(4, 9));
