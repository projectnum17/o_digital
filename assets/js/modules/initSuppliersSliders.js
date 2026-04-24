export const initSuppliersSliders = () => {
    if (typeof Swiper === 'undefined') return;

    const sliderRows = document.querySelectorAll('.js-supplier-slider');
    if (!sliderRows.length) return;

    sliderRows.forEach((row) => {
        new Swiper(row, {
            slidesPerView: 'auto',
            spaceBetween: 24,
            speed: 900,
        });
    });
};
