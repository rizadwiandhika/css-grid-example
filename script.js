const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const body = document.querySelector("body");
const ads = document.querySelector(".ads");

const adsToggle = document.querySelector(".ads input");



menuToggle.addEventListener("click", function(){
    nav.classList.toggle("slide");
    body.classList.toggle("slide");
    ads.classList.toggle("slide")
});

adsToggle.addEventListener("click", function(){
    if (menuToggle.checked == true){
        menuToggle.checked = false;
    }
    nav.classList.toggle("slide");
    body.classList.toggle("slide");
    ads.classList.toggle("slide")
});