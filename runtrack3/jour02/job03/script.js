document.addEventListener("DOMContentLoaded", function() {

    function addone() {

        let compteurElement = document.getElementById("compteur");

        let currentValue = parseInt(compteurElement.textContent);
        compteurElement.textContent = currentValue + 1;
    }

    document.getElementById("button").addEventListener("click", addone);
});
