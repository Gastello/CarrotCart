const swiper = new Swiper('.offers__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 150,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
        nextEl: '.offers__prev',
        prevEl: '.offers__next',
    },
});