/** returns a random rgb color */
const randColor = () => {
    let color = "rgb(";
    for (let i = 0; i < 3; i++) {
        if (i == 2) color += Math.floor(Math.random() * 256).toString() + ")";
        else color += Math.floor(Math.random() * 256).toString() + ", ";
    }
    return color;
};

const colleagues = [
    "Antoine Ghysens",
    "Aurore Remy",
    "Baptiste Geron",
    "Bruno Presti",
    "Fabrice Castrogiovanni",
    "Fanny Fraiture",
    "Francis François",
    "Frederic Van Overmeire",
    "JC Molhant",
    "Maxim K.",
    "Michael Tesfay",
    "Philippe Meulemans",
    "Raoni GIllet",
    "René",
    "Rouslan Boyko",
    "Stephane Genet",
    "Tiffany Dessouroux",
];

const article = document.querySelector("article");
let newSection, newP, textToAppend;
for (let colleague of colleagues) {
    newSection = document.createElement("section");
    newP = document.createElement("p");
    textToAppend = document.createTextNode(colleague);
    newP.appendChild(textToAppend);
    newSection.appendChild(newP);
    newSection.style.backgroundColor = randColor();
    article.appendChild(newSection);
}
