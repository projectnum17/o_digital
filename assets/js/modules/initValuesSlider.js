export const initValuesSlider = () => {
    if (typeof Swiper === 'undefined') return;

    const sliderBlock = document.querySelector('.js-values-slider');
    if (!sliderBlock) return;

    new Swiper(sliderBlock, {
        slidesPerView: 3,
        spaceBetween: 0,
        speed: 900,
        loop: true,
        navigation: {
            prevEl: '.js-values-prev',
            nextEl: '.js-values-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });
};
