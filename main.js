//scrollreveal

ScrollReveal().reveal('.scb',{
    delay: 100,
    distance: '50px',
    duration: 2500,
    reset: true
    
})

ScrollReveal().reveal('.scl',{
    delay: 50,
    distance: '50px',
    duration: 1000,
    reset: true,
    origin: 'left'
    
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