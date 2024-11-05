function updateFooterColor() {

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

    // couleur selon scroll
    const red = Math.min(255, Math.floor((scrollPercentage / 100) * 255));
    const blue = 255 - red;

    // changer couleur footer
    const footer = document.getElementById("footer");
    footer.style.backgroundColor = `rgb(${red}, 128, ${blue})`;
}

window.addEventListener("scroll", updateFooterColor);
