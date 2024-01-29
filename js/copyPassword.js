const copied = document.getElementById("toastMessage");

const copyPasswordIcon = document.getElementById("copyPasswordIcon");
copyPasswordIcon.addEventListener("click", function () {
    navigator.clipboard.writeText(password.innerText);
});

copyPasswordIcon.addEventListener("click", function () {
    navigator.clipboard.writeText(password.innerText);
    copied.classList.add("fade-out");
    copied.innerText = "COPIED";
});

copied.addEventListener("animationend", function () {
    copied.classList.remove("fade-out");
    copied.innerText = "";
});
