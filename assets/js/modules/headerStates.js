export const headerStates = () => {
    const header = document.querySelector('.js-header');
    if (!header) return;

    let lastScroll = 0;

    const handleScroll = () => {
        const currentScroll = window.scrollY;

        currentScroll > 450
            ? header.classList.add('is-transform')
            : header.classList.remove('is-transform');

        currentScroll > lastScroll && currentScroll > 450
            ? header.classList.add('is-transform')
            : header.classList.remove('is-transform');

        lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
};
