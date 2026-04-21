export const observerHelper = (selector, activeClass, gap = 1) => {
    const wrapper = document.querySelector(selector, activeClass);
    if (!wrapper) return;

    if ('IntersectionObserver' in window) {
        const wrapperObserve = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(activeClass);
                }
            },
            {
                threshold: gap,
            },
        );

        wrapperObserve.observe(wrapper);
    }
};
