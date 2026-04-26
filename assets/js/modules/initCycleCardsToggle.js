export const initCycleCardsToggle = () => {
    const cards = document.querySelectorAll('.js-cycle-box');
    if (!cards.length) return;

    cards.forEach((card) => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();

            const primaryBtn = card.querySelector('.js-form-trigger');
            const isOpen = card.classList.contains('is-open');

            if (primaryBtn.contains(e.target)) return;

            cards.forEach((el) => {
                el.classList.remove('is-open');
            });

            if (!isOpen) {
                card.classList.add('is-open');
            }
        });
    });
};
