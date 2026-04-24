export const initValuesCards = () => {
    const cards = document.querySelectorAll('.js-value-box');
    if (!cards.length) return;

    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            card.classList.toggle('is-active');
        });
    });
};
