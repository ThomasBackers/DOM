const ul = document.querySelector("ul");

for (let childNode of ul.childNodes) {
    if (childNode.nodeType === 1) {
        if (childNode.innerHTML === "Fast and Furious") {
            ul.insertBefore(childNode, ul.firstChild);
            childNode.classList.add("important");
            childNode.addEventListener("click", () => {
                alert(
                    "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
                );
            });
        } else {
            childNode.addEventListener("click", () => {
                alert(childNode.innerHTML);
            });
        }
    }
}

const newDiv = document.createElement("div");
const newSelect = document.createElement("select");
document.body.insertBefore(newDiv, ul);
newDiv.appendChild(newSelect);
for (let i = 0; i < 2; i++) {
    const newOption = document.createElement("option");
    if (i === 0) newOption.setAttribute("value", "important franchises");
    else newOption.setAttribute("value", "normal franchises");
    newSelect.appendChild(newOption);
}
console.log(newSelect.childNodes);