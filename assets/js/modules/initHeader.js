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
            let timeout;

            if (!ddMenu) return;

            const closeAll = () => {
                triggers.forEach((el) => {
                    el.classList.remove('is-active');
                    el.querySelector('.dd-menu')?.classList.remove('is-active');
                });
            };

            trigger.addEventListener('mouseenter', () => {
                clearTimeout(timeout);

                closeAll();

                trigger.classList.add('is-active');
                ddMenu.classList.add('is-active');
            });

            trigger.addEventListener('mouseleave', () => {
                timeout = setTimeout(() => {
                    trigger.classList.remove('is-active');
                    ddMenu.classList.remove('is-active');
                }, 500);
            });
        });
    };

    initDDMenu();
};
