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

// Animation for video sectio3:
window.addEventListener("scroll", () => {
const vid_pro = document.getElementById("vid_pro");
const position = vid_pro.getBoundingClientRect();

if (position.top < window.innerHeight && position.bottom >= 0){
    vid_pro.classList.add("visible_vid");
}
})

// Animation for Text beside of video:
window.addEventListener("scroll", () => {
    const txt_pro = document.getElementById("txt_pro");
    const position = txt_pro.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        txt_pro.classList.add("visible_txt");
    }
})

// new counter count:
const counters = document.querySelectorAll('.counter');
let hasStarted = false;

const easeOutQuad = (t) => t * (2 - t);

const startCounting = () => {
    counters.forEach(el => {
    const target = +el.getAttribute('data-target');
    const duration = 3000;
    const startTime = performance.now();

    const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentValue = Math.floor(easedProgress * target);

        el.innerText = currentValue.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            el.innerText = target.toLocaleString();
        }
        };

        requestAnimationFrame(animate);
    });
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
            hasStarted = true;
            startCounting();
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.counter-section'));

// Animation for counter:
window.addEventListener("scroll", () => {
    const counter_pro = document.getElementById("counter_pro");
    const position = counter_pro.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        counter_pro.classList.add("visible_cnter")
    }
})
// Aimation for h3 sec4:
window.addEventListener("scroll", () => {
    const abc_sec4 = document.getElementById("abc_sec4");
    const position = abc_sec4.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        abc_sec4.classList.add("visible_head_sec4a")
    }
})
// Animation for elements first:
window.addEventListener("scroll", () =>{
    const img_abc = document.getElementById("img_abc");
    const position = img_abc.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        img_abc.classList.add("visible_iii")
    }
})
// Animation for elements Second:
window.addEventListener("scroll", () =>{
    const elem1 = document.getElementById("elem1");
    const position = elem1.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        elem1.classList.add("visible_ii")
    }
})
// Animation for elements last:
window.addEventListener("scroll", () =>{
    const elem2 = document.getElementById("elem2");
    const position = elem2.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        elem2.classList.add("visible_i")
    }
})
// Animation for prt1:
window.addEventListener("scroll", () => {
    const nnn = document.getElementById("nnn");
    const position = nnn.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        nnn.classList.add("visible_nnn")
    }
})
// Animation for prt2:
window.addEventListener("scroll", () => {
    const ooo = document.getElementById("ooo");
    const position = ooo.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        ooo.classList.add("visible_ooo")
    }
})

// Animation for head text sec6:
window.addEventListener("scroll", () => {
    const ddra = document.getElementById("ddra");
    const position = ddra.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0){
        ddra.classList.add("visible_em")
    }
})

// Animation for paragraph sec6:
window.addEventListener("scroll", () => {
    const aa2 = document.getElementById("aa2");
    const position = aa2.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0){
        aa2.classList.add("visible_aa2")
    }
})

// Animation for label sec6:
window.addEventListener("scroll", () => {
    const aa3 = document.getElementById("aa3");
    const position = aa3.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0){
        aa3.classList.add("visible_aa3")
    }
})

// Animation for input sec6:
window.addEventListener("scroll", () => {
    const aa4 = document.getElementById("aa4");
    const position = aa4.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0){
        aa4.classList.add("visible_aa4")
    }
})
// Animation for img sec6:
window.addEventListener("scroll", () => {
    const ggg = document.getElementById("ggg");
    const position = ggg.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0){
        ggg.classList.add("visible_pot2")
    }
})