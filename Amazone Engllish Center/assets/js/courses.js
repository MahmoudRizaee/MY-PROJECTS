function switchView(view) {
    const container = document.getElementById("courses");
    if (view === 'grid') {
        container.classList.remove("courses-list");
        container.classList.add("courses-grid");
    } else {
        container.classList.remove("courses-grid");
        container.classList.add("courses-list");
    }
}

document.getElementById('courseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Your information has been submitted. Our team will contact you soon.");
    this.reset();
});