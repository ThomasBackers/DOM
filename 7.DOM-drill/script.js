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
        } else
            childNode.addEventListener("click", () => {
                alert(childNode.innerHTML);
            });
    }
}

const newDiv = document.createElement("div");
const newSelect = document.createElement("select");
document.body.insertBefore(newDiv, ul);
newDiv.appendChild(newSelect);
for (let i = 0; i < 2; i++) {
    const newOption = document.createElement("option");
    if (i === 0) {
        newOption.setAttribute("value", "normal franchises");
        newOption.innerHTML = "normal franchises";
    } else {
        newOption.setAttribute("value", "important franchises");
        newOption.innerHTML = "important franchises";
    }
    newSelect.appendChild(newOption);
}

newSelect.addEventListener("change", event => {
    if (event.target.value === "important franchises") {
        for (let element of ul.childNodes)
            if (element.nodeType === 1 && !element.classList.contains("important"))
                element.style.visibility = "hidden";
    } else for (let element of ul.childNodes) if (element.nodeType === 1) element.style.visibility = "visible";
});

// HARD MODE
const allLi = [];
for (let element of ul.childNodes) if (element.nodeType === 1) allLi.push(element);

/**
 * loop over all the list elements while keeping track of all textContent
 * and remove any elements whose textContent you've already seen earlier 
 */
const removeDuplicateLi = () => {
    const seenTextContent = {};
    for (let li of allLi) {
        //here we remove the element if its textContent is already stored
        if (seenTextContent[li.textContent]) ul.removeChild(li);
        //else we set an entry [li.textContent] = true in seenTextContent
        else seenTextContent[li.textContent] = true;
    }
}
removeDuplicateLi();

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}
document.body.addEventListener("keyup", event => {
    if (event.key === "r") {
        shuffleArray(allLi);
        ul.innerHTML = "";
        for (let li of allLi) ul.appendChild(li);
        ul.insertBefore(ul.querySelector(".important"), ul.firstChild);
    };
})
