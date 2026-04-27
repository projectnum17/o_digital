export const initHeader = () => {
    const header = document.querySelector('.js-header');
    if (!header) return;

    let lastScroll = 0;
    let scrollWay = 200;

    const handleScroll = () => {
        const currentScroll = window.scrollY;

        currentScroll > scrollWay
            ? header.classList.add('is-transform')
            : header.classList.remove('is-transform');

        currentScroll > lastScroll && currentScroll > scrollWay
            ? header.classList.add('is-transform')
            : header.classList.remove('is-transform');

        lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const initDDMenu = () => {
        const triggers = document.querySelectorAll(
            '.js-header li:has(.dd-menu)',
        );
        if (!triggers.length) return;

        triggers.forEach((trigger) => {
            const ddMenu = trigger.querySelector('.dd-menu');
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                if (ddMenu) {
                    trigger.classList.toggle('is-active')
                    ddMenu.classList.toggle('is-active');
                }
            });
        });
    };

    initDDMenu();
};
