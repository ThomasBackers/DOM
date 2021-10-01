const ul = document.querySelector("ul");
console.log(ul.childNodes);

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
