let menuBtn = document.querySelector('.menu-open');
let menu = document.querySelector('.menu'); 
let menuClose = document.querySelector('.menu__close');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', ev => {
        menu.classList.add('_active');
        document.body.classList.add('_no-scroll');
    })

    menuClose.addEventListener('click', ev => {
        menu.classList.remove('_active');
        document.body.classList.remove('_no-scroll');
    })
}

const swiper = new Swiper('.forpartners__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,

    breakpoints: {
        720: {
            slidesPerView: 2
        },

        1224: {
            slidesPerView: 3
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.forpartners__slider-btn._next',
      prevEl: '.forpartners__slider-btn._prev',
    },
  });