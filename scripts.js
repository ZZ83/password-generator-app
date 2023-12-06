const sliderFill = document.getElementById("fill");
const charaterLength = document.getElementById("charaterLength");

function slider(range) {
    const width = `${parseInt(range.value) * 4.95}%`;
    sliderFill.style.width = width;
    charaterLength.innerText = range.value;
}
