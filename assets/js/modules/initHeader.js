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
                if (!ddMenu) return;

                const isActive = trigger.classList.contains('is-active');

                triggers.forEach((el) => {
                    const menu = el.querySelector('.dd-menu');
                    el.classList.remove('is-active');
                    menu?.classList.remove('is-active');
                });

                if (!isActive) {
                    trigger.classList.add('is-active');
                    ddMenu.classList.add('is-active');
                }
            });
        });
    };

    initDDMenu();
};
