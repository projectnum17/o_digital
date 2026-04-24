export const initAutoHeightHandler = () => {
    const sections = document.querySelectorAll('.promo');

    sections.forEach((section) => {
        const textBox = section.querySelector('.js-text-box');
        const btn = section.querySelector('.js-text-more');

        if (!textBox || !btn) return;

        btn.addEventListener('click', () => {
            const fullHeight = textBox.scrollHeight;

            textBox.style.height = `${fullHeight}px`;

            textBox.classList.add('is-open');

            btn.classList.add('is-hidden');

            setTimeout(() => {
                textBox.style.height = 'auto';
            }, 500);
        });
    });
};
