/* ---------------------------------- */
/* ------Funcinalidad icono menu----- */
/* ---------------------------------- */
let menuClass = 'bx-x';
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle(menuClass);
    navbar.classList.toggle('show');
};

/* ---------------------------------- */
/* -------Scroll al active Link------ */
/* ---------------------------------- */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`header nav ul li a[href*=${id}]`).classList.add('active');
            })            
        }
    });
    /* ---------------------------------- */
    /* -----------sticky navbar---------- */
    /* ---------------------------------- */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ---------------------------------- */
    /* --ocultar cierre y cerrar navbar-- */
    /* ---------------------------------- */
    menuIcon.classList.remove(menuClass);
    navbar.classList.remove('show');
};

/* ---------------------------------- */
/* ----------Scroll Reveals---------- */
/* ---------------------------------- */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right'});

/* ---------------------------------- */
/* -------------typed js------------- */
/* ---------------------------------- */

const typed = new Typed('.multiple-text', {
    strings: ['React Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

/* ---------------------------------- */
/* -------------EmailJS'------------- */
/* ---------------------------------- */
const btn = document.getElementById('btn-submit');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_68uiy1b';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});

emailjs.init('USmPf_J3LyfW1fnNr');