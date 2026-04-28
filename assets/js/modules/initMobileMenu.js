export const initMobileMenu = () => {
    const initMobileVisible = () => {
        const burger = document.querySelector('.js-menu-trigger');
        const menuBox = document.querySelector('.js-mobile-menu');
        if (!burger || !menuBox) return;

        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active')
            menuBox.classList.toggle('is-open')
            document.body.classList.toggle('is-locked')
        })
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
