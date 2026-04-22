export const supplierPage = () => {
    const supplierGridHandler = () => {
        const items = document.querySelectorAll('.js-supplier-btn');
        if (!items.length) return;

        let cols;
        window.innerWidth < 768 ? (cols = 3) : (cols = 9);
        const rows = Math.ceil(items.length / cols);
        const lastRowStart = (rows - 1) * cols;

        items.forEach((item, index) => {
            if (index >= lastRowStart) {
                item.classList.add('no-border');
            }
        });
    };

    supplierGridHandler();

    const initProjectsSlider = () => {
        if (typeof Swiper === 'undefined') return;

        const sliderRows = document.querySelectorAll('.js-supplier-slider');
        if (!sliderRows.length) return;

        sliderRows.forEach((row) => {
            new Swiper(row, {
                slidesPerView: 'auto',
                spaceBetween: 24,
                speed: 900,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: true,
                },
            });
        });
    };

    initProjectsSlider();
};
