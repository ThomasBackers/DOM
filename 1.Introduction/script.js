let docTitle = document.title;
console.log(docTitle);
docTitle = "Modifying the DOM";
console.log(docTitle);
for (let childNode of document.body.childNodes) {
    console.log(childNode);
}
const randColor = () => {
    let color = "rgb("
    for (let i = 0; i < 3; i++) {
        if (i == 2) color += Math.floor(Math.random() * 255).toString() + ")";
        else color += Math.floor(Math.random() * 255).toString() + ", ";
    }
    return color;
}
document.body.style.backgroundColor = randColor();