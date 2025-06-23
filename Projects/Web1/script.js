// Animation for Navbar
window.addEventListener("scroll", () => {
    const nav_pro = document.getElementById("nav_pro");
    const position = nav_pro.getBoundingClientRect();

    if (position.bottom < window.innerHeight && position.top >= 0){
        nav_pro.classList.add("visible_nav")
    }
})
// Animation for h1
window.addEventListener("scroll", () => {
    const h1_pro = document.getElementById("h1_pro");
    const position = h1_pro.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        h1_pro.classList.add("visible_h1");
    }else {
        h1_pro.classlist.remove("visible_h1")
    }
})
// Animation for Paragraph
window.addEventListener("scroll", () => {
    const p1_pro = document.getElementById("p1_pro");
    const position = p1_pro.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        p1_pro.classList.add("visible_p1");
    }
})
// Animation for Paragraph

window.addEventListener("scroll", () => {
    const btn_pro = document.getElementById("btn_pro");
    const position = btn_pro.getBoundingClientRect();

    if (position.bottom < window.innerHeight && position.top >= 0){
        btn_pro.classList.add("visible_btn")
    }
})
// Animation for Paragraph

window.addEventListener("scroll", () => {
    const img_pro = document.getElementById("img_pro");
    const position = img_pro.getBoundingClientRect();

    if (position.bottom < window.innerHeight && position.top >= 0){
        img_pro.classList.add("visible_img")
    }
})
// Animation for h2 and paragraph section2
window.addEventListener("scroll", () => {
    const h2_pro = document.getElementById("h2_pro");
    const position = h2_pro.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        h2_pro.classList.add("visible_h2");
    }
})
// Animation for template:
window.addEventListener("scroll", () => {
    const temp_pro = document.getElementById("temp_pro");
    const position = temp_pro.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        temp_pro.classList.add("visible_temp");
    }
})