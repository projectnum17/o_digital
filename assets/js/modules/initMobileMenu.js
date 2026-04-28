export const initMobileMenu = ({ bodyLock }) => {
    const initMobileVisible = () => {
        const burger = document.querySelector('.js-menu-trigger');
        const menuBox = document.querySelector('.js-mobile-menu');
        if (!burger || !menuBox) return;

        let isOpen = false;

        burger.addEventListener('click', () => {
            isOpen = !isOpen;

            burger.classList.toggle('is-active', isOpen);
            menuBox.classList.toggle('is-open', isOpen);

            if (isOpen) {
                bodyLock.lock();
            } else {
                bodyLock.unlock();
            }
        });
    };
    const initDDMenu = () => {
        const items = document.querySelectorAll('.mobile-menu__routes > li');

        if (!items.length) return;

        items.forEach((item) => {
            const trigger = item.querySelector(':scope > a');
            const menu = item.querySelector(':scope > .dd-menu');
            const submenus = item.querySelectorAll('.dd-menu__submenu');

            if (trigger && menu) {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();

                    item.classList.toggle('is-active');
                    menu.classList.toggle('is-active');
                });
            }

            submenus.forEach((submenu) => {
                const heading = submenu.querySelector('.dd-menu__heading');

                if (!heading) return;

                heading.addEventListener('click', () => {
                    submenu.classList.toggle('is-active');
                });
            });
        });
    };
    initDDMenu();
    initMobileVisible();
};
