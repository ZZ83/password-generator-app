const password = document.getElementById("password");
const copyIcon = document.getElementById("copyIcon");

const sliderFill = document.getElementById("fill");
const charaterLength = document.getElementById("charaterLength");

const uppercaseCheckbox = document.getElementById("uppercaseCheckbox");
const lowerCheckCheckbox = document.getElementById("lowercaseBox");
const numberCheckbox = document.getElementById("numbersCheckbox");
const symbolsCheckbox = document.getElementById("symbolsCheckbox");

function slider(range) {
    const width = `${parseInt(range.value) * 4.95}%`;
    sliderFill.style.width = width;
    charaterLength.innerText = range.value;
}
