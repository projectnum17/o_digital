export const resultSliderHandler = () => {
    if (typeof Swiper === 'undefined') return;

    const sliderHandler = document.querySelector('.js-results-slider');

    if (!sliderHandler) return;

    new Swiper(sliderHandler, {
        spaceBetween: 30,
        slidesPerView: 'auto',
        speed: 900,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.js-results-progress',
            type: 'progressbar',
        },

        on: {
            init(swiper) {
                updateFraction(swiper);
            },
            slideChange(swiper) {
                updateFraction(swiper);
            },
        },
    });

    function updateFraction(swiper) {
        const current = String(swiper.realIndex + 1).padStart(2, '0');
        const total = String(swiper.slides.length).padStart(2, '0');

        const fractionEl = document.querySelector('.js-results-fraction');
        if (!fractionEl) return;

        fractionEl.textContent = `${current}-${total}`;
    }
};
