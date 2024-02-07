// Pre Loader  
const preloader = document.getElementById("loader");

function myLoder(){
    preloader.style.display = "none";
};

// hamburger 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

// Current-year 
const year = document.querySelector(".currentYear")
year.innerHTML = new Date().getFullYear();

AOS.init();