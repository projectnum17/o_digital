export const layoutWrapperState = () => {
    const wrapper = document.querySelector('.js-media-wrapper');
    const buttons = document.querySelectorAll('[data-layout]');

    if (!wrapper || !buttons.length) return;

    wrapper.classList.remove('is-list');
    buttons.forEach((btn) => {
        btn.classList.toggle('is-current', btn.dataset.layout === 'grid');
    });

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const layout = btn.dataset.layout;

            wrapper.classList.toggle('is-list', layout === 'list');

            buttons.forEach((b) => b.classList.remove('is-current'));
            btn.classList.add('is-current');
        });
    });
};
