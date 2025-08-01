let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navi');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}
