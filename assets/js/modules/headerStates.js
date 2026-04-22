export const headerStates = () => {
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

    const initSearchPanel = () => {
        const trigger = document.querySelector('.js-search-trigger');
        const searchPanel = document.querySelector('.js-search-panel');
        if (!trigger || !searchPanel) return;

        const searchField = searchPanel.querySelector('.js-search-field');
        const closePanel = searchPanel.querySelector('.js-search-close');
        const formSearch = searchPanel.querySelector('form');
        if (!searchField || !closePanel || !formSearch) return;

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            document.body.classList.add('is-locked');
            searchPanel.classList.add('is-show');
            setTimeout(() => {
                searchField.focus();
            }, 100);
        });

        closePanel.addEventListener('click', (e) => {
            e.stopPropagation();
            searchPanel.classList.remove('is-show');
            document.body.classList.remove('is-locked');

            setTimeout(() => {
                formSearch.reset();
            }, 500);
        });

        const box = searchPanel.querySelector('.js-search-wrapper');
        if (!box) return;

        searchPanel.addEventListener('click', (e) => {
            if (!box.contains(e.target)) {
                searchPanel.classList.remove('is-show');
                document.body.classList.remove('is-locked');

                setTimeout(() => {
                    formSearch.reset();
                }, 500);
            }
        });
    };

    initSearchPanel();
};
