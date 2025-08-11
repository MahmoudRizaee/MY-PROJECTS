let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

let lastScrollY = window.scrollY;
const header = document.querySelector(".header-home");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }
    lastScrollY = window.scrollY;
});
