// Abre e fecha o menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

// Fechar quando clicar um item do menu
const links = document.querySelectorAll('nav ul li a')

for(const element of links) {
    element.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// Header shadow
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function navShadow() {
    if(window.scrollY >= navHeight) header.classList.add('scroll');
    else header.classList.remove('scroll');
}

// Back to top
const arrowBtn = document.querySelector('.arrow-up');

function backToTop() {
    if(window.scrollY >= 560) arrowBtn.classList.add('show'); 
    else arrowBtn.classList.remove('show'); 
}

// Activded Menu
const sections = document.querySelectorAll('main section[id]');
function activedMenu() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 5;

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
        
        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
        
        if (checkpointStart && checkpointEnd) {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        } 
        
        else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

// Call function
window.addEventListener('scroll', function() {
    navShadow();
    backToTop();
    activedMenu();
})

// Slider - Swiper
const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      pagination: {
          el: '.swiper-pagination'
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
          767: {
              slidesPerView: 2,
              setWrapperSize: true
          }
      }
});

// ScrollReveal

const scrollReveal = ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .container, #testimonials .container,
    #services header, #sevices .cards .card,
    #contactmain .text, #contactmain .links,
    footer .icons, footer #content, footer .credits
    `
    , { interval: 50 }
)

