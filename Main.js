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


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});





