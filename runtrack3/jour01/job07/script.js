function jourtravaille(date) {

    const joursFeries = [
        new Date(2020, 0, 1),  // 1er janvier
        new Date(2020, 3, 13), // Lundi de Pâques
        new Date(2020, 4, 1),  // 1er mai
        new Date(2020, 4, 8),  // 8 mai
        new Date(2020, 4, 21), // Ascension
        new Date(2020, 5, 1),  // Lundi de Pentecôte
        new Date(2020, 6, 14), // 14 juillet
        new Date(2020, 7, 15), // 15 août
        new Date(2020, 10, 1), // 1er novembre
        new Date(2020, 10, 11),// 11 novembre
        new Date(2020, 11, 25) // Noël
    ];
    
    const jour = date.getDate();
    const mois = date.getMonth(); // 0 = Janvier, rajouter 1 pour éviter cafouillage
    const annee = date.getFullYear();
    
    // Vérifier si date = jour férié
    for (let i = 0; i < joursFeries.length; i++) {
        if (joursFeries[i].getTime() === date.getTime()) {
            console.log(`Le ${jour} ${mois + 1} ${annee} est un jour férié.`);
            return;
        }
    }

    // check des week ends
    const jourSemaine = date.getDay(); // 0 = Dimanche, 6 = Samedi, pas oublier
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${jour} ${mois + 1} ${annee} est un week-end.`);
        return;
    }

    // jour normal
    console.log(`Oui, le ${jour} ${mois + 1} ${annee} est un jour travaillé.`);
}

// ZONE DE TEST
let maDate = new Date(2020, 4, 1); // 1er mai 2020
jourtravaille(maDate);
