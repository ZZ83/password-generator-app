const password = document.getElementById("password");
const copyIcon = document.getElementById("copyIcon");

const sliderFill = document.getElementById("fill");
const charaterLength = document.getElementById("charaterLength");

const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const lowercaseCheckbox = document.getElementById("lowercaseCheckbox");
const numberCheckbox = document.getElementById("numbersCheckbox");
const symbolsCheckbox = document.getElementById("symbolsCheckbox");

const generateButton = document.getElementById("generateButton");

function slider(range) {
    const width = `${parseInt(range.value) * 4.95}%`;
    sliderFill.style.width = width;
    charaterLength.innerText = range.value;
}

copyIcon.addEventListener("click", function () {
    navigator.clipboard.writeText(password.innerText);
});
