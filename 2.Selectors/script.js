const importantElements = document.querySelectorAll(".important");
for (let importantElement of importantElements)
    importantElement.setAttribute("title", "This is an important item");

const imgs = document.querySelectorAll("img");
for (let img of imgs) if (!img.classList.contains("important")) img.style.display = "none";

for (let element of document.querySelectorAll("p")) {
    if (element.hasChildNodes) for (let childNode of element.childNodes) console.log(childNode);
    if (element.classList.length !== 0) console.log(element.getAttribute("class"));
}
