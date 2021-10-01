const _initTime = Date.now();
const displayedSquareWrapper = document.querySelector(".displayedsquare-wrapper");
const ul = document.querySelector("ul");
console.log(displayedSquareWrapper);

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}

function colorMessage(e) {
    const color = e.target.classList[1];
    const messageBox = document.createElement("div");
    messageBox.style.backgroundColor = "rgb(17, 16, 16)";
    messageBox.style.display = "flex";
    messageBox.style.position = "fixed";
    messageBox.style.right = "0";
    messageBox.style.top = "0";
    messageBox.style.width = "10rem";
    messageBox.style.height = "5rem";
    const p = document.createElement("p");
    p.innerHTML = color;
    p.style.color = "white";
    p.style.margin = "auto";
    p.style.fontSize = "1.5rem";
    p.style.fontWeight = "bold";
    messageBox.appendChild(p);
    document.body.appendChild(messageBox);
}

function clickOnSquare(e) {
    console.log(e.target.classList[1]);
    console.log(getElapsedTime());
    const newSquare = document.createElement("div");
    newSquare.classList.add("displayedsquare");
    newSquare.classList.add(e.target.classList[1]);
    newSquare.addEventListener("click", colorMessage);
    displayedSquareWrapper.appendChild(newSquare);

    const newLi = document.createElement("li");
    newLi.innerHTML = `[${getElapsedTime()}] Created a new ${e.target.classList[1]} square`;
    ul.appendChild(newLi);
}

// key mapping is valid for Belgian keyboard; so BEWARE if you're using US qwerty or some other ;)
function keypress(e) {
    //keyCode & keypress are deprecated, I have to learn more about it 
    switch (e.keyCode) {
        case 32:
            console.log(e.keyCode);
            console.log(getElapsedTime());
            const newLi = document.createElement("li");
            newLi.innerHTML = `[${getElapsedTime()}] spacebar hit`;
            ul.appendChild(newLi);
            break;
        case 108:
            ul.removeChild(ul.lastElementChild);
            break;
        case 115:
            displayedSquareWrapper.innerHTML = "";
            break;
    }
}

const actionsquares = document.querySelectorAll(".actionsquare");
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener("click", clickOnSquare);
    document.body.addEventListener("keypress", keypress);
}
