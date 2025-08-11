const languageBtn = document.getElementById("openPopup");
const popup = document.getElementById("popup");

languageBtn.addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    popup.classList.add("open");
    document.body.style.overflow = 'hidden';
});

popup.addEventListener("click", function(e) {
    if (e.target === popup) {
        popup.classList.remove("open");
        document.body.style.overflow = '';
    }
});
