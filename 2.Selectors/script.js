const importantElements = document.querySelectorAll(".important");
for (let importantElement of importantElements) {
    importantElement.setAttribute("title", "This is an important item");
}
const imgs = document.querySelectorAll("img");
for (let img of imgs) {
    if (!img.classList.contains("important")) {
        img.style.display = "none";
    }
}
for (let element of document.querySelectorAll("p")) {
    console.log(element.innerHTML);
    if (element.classList.length !== 0) {
        for (let className of element.classList) {
            console.log(className);
        }
    }
}