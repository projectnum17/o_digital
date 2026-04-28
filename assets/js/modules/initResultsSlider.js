export const initResultsSlider = () => {
    if (typeof Swiper === 'undefined') return;

    const sliderHandler = document.querySelector('.js-results-slider');

    if (!sliderHandler) return;

    new Swiper(sliderHandler, {
        spaceBetween: 30,
        slidesPerView: 'auto',
        speed: 900,
        autoplay: {
            delay: 4500,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.js-results-progress',
            type: 'progressbar',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
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
