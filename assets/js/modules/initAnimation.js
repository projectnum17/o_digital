export const initAnimation = () => {
    const animatedItems = document.querySelectorAll('.js-scroll');

    if (!animatedItems.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.classList.add('_animated');

                    el.addEventListener(
                        'transitionend',
                        () => {
                            if (el.classList.contains('_animated')) {
                                el.style.transform = 'none';
                                el.style.willChange = 'auto';
                            }
                        },
                        { once: true },
                    );

                    observer.unobserve(el);
                }
            });
        },
        { threshold: 0.1 },
    );

    animatedItems.forEach((item) => observer.observe(item));
};
