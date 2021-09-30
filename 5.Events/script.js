const _initTime = Date.now();
const displayedSquareWrapper = document.querySelector(".displayedsquare-wrapper");
const ul = document.querySelector("ul");
console.log(displayedSquareWrapper);

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
}

function clickOnSquare(e) {
    console.log(e.target.classList[1]);
    console.log(getElapsedTime());
    const newSquare = document.createElement("div");
    newSquare.classList.add("displayedsquare");
    newSquare.classList.add(e.target.classList[1]);
    displayedSquareWrapper.appendChild(newSquare);

    const newLi = document.createElement("li");
    newLi.innerHTML = `[${getElapsedTime()}] Created a new ${e.target.classList[1]} square`;
    ul.appendChild(newLi);
}

// key mapping is valid for Belgian keyboard; so BEWARE if you're using US qwerty or some other ;)
function keypress(e) {
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
