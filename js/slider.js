const charaterLengthSlider = document.getElementById("charaterLengthSlider");
const sliderFill = document.getElementById("fill");
function slider(range) {
    const width = `${parseInt(range.value) * 4.95}%`;
    sliderFill.style.width = width;
    charaterLength.innerText = range.value;
}

charaterLengthSlider.addEventListener("input", function () {
    slider(this);
});
