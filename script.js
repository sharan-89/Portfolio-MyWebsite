let lightmode = localStorage.getItem('lightmode');
const themeswitch = document.getElementById('theme-switch');

const enablelightmode = () => {
  document.body.classList.add('lightmode');
  localStorage.setItem('lightmode','active');
};

const disablelightmode = () => {
  document.body.classList.remove('lightmode');
  localStorage.setItem('lightmode', null);
};

if(lightmode == 'active') enablelightmode()

themeswitch.addEventListener("click", () => {
  lightmode = localStorage.getItem('lightmode')
  lightmode !== "active" ? enablelightmode() : disablelightmode()
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  let header =  document.querySelector('header');
  header.classList.toggle('sticky',  window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 1000,
  delay:50
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form',{ origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'top' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'bottom' });


const typed = new Typed('.multi-text', {
  strings: ['Web Designer!', 'UI/UX Designer!', 'Photo Editor!',  'Web Developer!'],
  typeSpeed:100,
  backSpeed:20,
  backDelay: 1000,
  loop: true

});

