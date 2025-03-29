// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {

/*==================== scroll sections active link ====================*/
sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        })
    }
})

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

//Typed JS
const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Web Developer', 'Curious', 'Learning every day'],
    typeSpeed: 100,
    backSpeed: 90,
    backDelay: 450,
    loop: true
});

ScrollReveal({
    // reset: true,
    distance: '30px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, #ec1, #sc1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, #ec2, #sc2', { origin: 'right' });


/*==================== dark mode ====================*/
document.querySelectorAll('.footer img').forEach(item => {
    item.addEventListener('click', darkMode);
  });
  
  function darkMode() {
    let body = document.querySelector('body');
    let mode = this.dataset.mode;
    body.dataset.theme = mode;
  }
  
$(function(){
    $("#about-readmore").click(function(){
      $("#text-readmore").toggle("slow");
      $("#about-readmore").fadeToggle("200");
    });
  });


    // animation footer on scroll

