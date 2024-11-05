function tri(numbers, order) {

    if (order === "asc") {
        numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        numbers.sort((a, b) => b - a);
    } else {
        console.log("Erreur");
        return null;
    }

    return numbers;
}

// Zone de Test
console.log(tri([5, 2, 9, 1, 7], "asc"));
console.log(tri([5, 2, 9, 1, 7], "desc"));
