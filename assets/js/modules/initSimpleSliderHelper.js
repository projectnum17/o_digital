export const initSimpleSliderHelper = ({
    parent,
    slidesShown,
    gap,
    breakpoints = {},
}) => {
    if (typeof Swiper === 'undefined') return;

    const sliderRows = document.querySelectorAll(parent);
    if (!sliderRows.length) return;

    sliderRows.forEach((row) => {
        new Swiper(row, {
            slidesPerView: slidesShown || 3,
            spaceBetween: gap || 24,
            speed: 900,
            breakpoints,
        });
    });
};
