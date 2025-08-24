// responsive
const toggle = document.getElementById("toggleMenu");
const menu = document.querySelector(".nav-menu");


toggle.addEventListener("click", () => {
    toggle.classList.toggle("view");     
    menu.classList.toggle("responsive"); 
});

const aside = document.querySelector("aside");
const mediaQuery = window.matchMedia("(max-width: 950px)");

window.addEventListener("scroll", () => {
    if (mediaQuery.matches) { 
        if (window.scrollY > 100) {
            aside.style.backgroundColor = "black";
        } else {
            aside.style.backgroundColor = "rgba(20, 20, 20, 0.1)";
        }
    } else {
        // aside.style.backgroundColor = "#040b14";
    }
});

//CREATION DES CAROUSSELS ET DYNAMISME
const buttons = document.querySelectorAll('.btn');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
function goToSlide(index) {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[index].classList.add('active');
    currentIndex = index;
}
function changeSlide(direction = 1) {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;
    goToSlide(newIndex);
}
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const direction = e.target.id === "next" ? 1 : -1;
        changeSlide(direction);
    });
});

setInterval(() => {
    changeSlide(1);
}, 4000);


const links=document.querySelectorAll(".portfolio-buttons button");
const images=document.querySelectorAll(".portfolio-grid img")

images.forEach(img =>{
            img.classList.add('show');
})

links.forEach(link => {
    link.addEventListener("click", (e)=>{
        e.preventDefault();

        links.forEach(l =>
            l.classList.remove('active'));

        link.classList.add('active');
        const cat= link.getAttribute('data-cat');     // 

        images.forEach(img =>{
            img.classList.remove('show');

            if(cat === "ALL" || img.getAttribute('data-cat') === cat){
                img.classList.add('show');
            }
        });
    });
});