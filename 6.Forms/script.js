const inputs = document.querySelectorAll("input");
const displayField = document.querySelector("#display-firstname");
const select = document.querySelector("select");

const displayName = e => (displayField.innerText = e.target.value);
const displayHardTruth = e => {
    const hardTruth = document.querySelector("#a-hard-truth");
    if (e.target.value >= 18) hardTruth.style.visibility = "visible";
    else hardTruth.style.visibility = "hidden";
};
const passwordLengthChecker = e => {
    if (e.target.value.length < 6) e.target.style.backgroundColor = "red";
    else e.target.style.backgroundColor = "white";
};
const isIdenticalToPassword = e => {
    if (e.target.value !== inputs[2].value) e.target.style.backgroundColor = "red";
    else e.target.style.backgroundColor = "white";
};
const toggleDarkMode = (e) => {
    if (e.target.value === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
};

inputs[0].addEventListener("keyup", displayName);
inputs[1].addEventListener("keyup", displayHardTruth);
inputs[2].addEventListener("keyup", passwordLengthChecker);
inputs[3].addEventListener("keyup", isIdenticalToPassword);
select.addEventListener("change", toggleDarkMode);
