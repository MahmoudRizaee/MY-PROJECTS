window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader-container").style.display = "none";
        document.body.classList.remove("no-scroll");
    }, 2000);
});