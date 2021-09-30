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

const actionsquares = document.querySelectorAll(".actionsquare");
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener("click", clickOnSquare);
}
