const importantElements = document.querySelectorAll(".important");
for (let importantElement of importantElements)
    importantElement.setAttribute("title", "This is an important item");

const imgs = document.querySelectorAll("img");
for (let img of imgs) if (!img.classList.contains("important")) img.style.display = "none";

/** returns a random rgb color */
const randColor = () => {
    let color = "rgb("; 
    for (let i = 0; i < 3; i++) {
        if (i == 2) color += Math.floor(Math.random() * 256).toString() + ")";
        else color += Math.floor(Math.random() * 256).toString() + ", ";
    }
    return color;
}

for (let p of document.querySelectorAll("p")) {
    if (p.hasChildNodes) for (let childNode of p.childNodes) console.log(childNode);
    if (p.classList.length !== 0) console.log(p.getAttribute("class"));
    p.style.color = randColor();
}
