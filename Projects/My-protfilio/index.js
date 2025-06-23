let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


// document.addEventListener("DOMContentLaded",
//     function () {
//         const form = document.querySelector("form");
//         const button = document.querySelector("#btnd")

//         form.addEventListener('input', () => {
//             if(form.checkValidity()) {
//                 button.removeAttribute('disabled');
//                 button.classList.add('active')
//             } else {
//                 button.setAttribute('disabled', 'true');
//                 button.classList.remove('active')
//             }
//         })
//     });