const inputs = document.querySelectorAll("input");
const displayField = document.querySelector("#display-firstname");

const displayName = e => displayField.innerText = e.target.value;
const displayHardTruth = e => {
    const hardTruth = document.querySelector("#a-hard-truth");
    if (e.target.value >= 18) hardTruth.style.visibility = "visible";
    else hardTruth.style.visibility = "hidden";
} 

inputs[0].addEventListener("keyup", displayName);
inputs[1].addEventListener("keyup", displayHardTruth);