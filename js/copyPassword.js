const copyPasswordIcon = document.getElementById("copyPasswordIcon");
copyPasswordIcon.addEventListener("click", function () {
    navigator.clipboard.writeText(password.innerText);
    copied.innerText = "COPIED";
    copied.classList.add("animate-fade");
    copyPasswordIcon.disabled = true;
});

const copied = document.getElementById("toastMessage");
copied.addEventListener("animationend", function () {
    copied.innerText = "";
    copied.classList.remove("animate-fade");
    copyPasswordIcon.disabled = false;
});
