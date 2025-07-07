
// const hamburger = document.getElementById('hamburger');
// const navMenu = document.getElementById('navMenu');

// hamburger.addEventListener('click', () => {
//     navMenu.classList.toggle('active');
// });
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
