//scrollreveal

ScrollReveal().reveal('.scb',{
    delay: 100,
    distance: '50px',
    duration: 2500,
    reset: false
    
})

ScrollReveal().reveal('.sclnav',{
    delay: 50,
    distance: '50px',
    duration: 1000,
    reset: false,
    origin: 'left'
    
})

ScrollReveal().reveal('.scl',{
    delay: 100,
    distance: '100px',
    duration: 2500,
    reset: false,
    origin: 'left'
    
})

ScrollReveal().reveal('.scr',{
    delay: 100,
    distance: '100px',
    duration: 2500,
    reset: false,
    origin: 'right'
    
})

//carrusel con swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});