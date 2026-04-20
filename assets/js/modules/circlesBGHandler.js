export const circlesBGHandler = () => {
    const wrapper = document.querySelector('.js-circles-anim');
    if (!wrapper) return;

    if ('IntersectionObserver' in window) {
        const wrapperObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            },
            {
                threshold: 1,
            },
        );

        wrapperObserver.observe(wrapper);
    }
};
