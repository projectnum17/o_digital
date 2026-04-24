export const initBricksHandler = () => {
    const container = document.querySelector('.js-brick');
    const bg = document.querySelector('.js-brick-bg');

    if (!container || !bg) return;

    const rect = bg.getBoundingClientRect();
    const startX = rect.width / 2;
    const startY = rect.height / 2;

    bg.style.setProperty('--x', `${startX}px`);
    bg.style.setProperty('--y', `${startY}px`);

    window.addEventListener('mousemove', (e) => {
        const rect = bg.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        bg.style.setProperty('--x', `${x}px`);
        bg.style.setProperty('--y', `${y}px`);

        container.style.setProperty('--x', `${e.clientX}px`);
        container.style.setProperty('--y', `${e.clientY}px`);
    });
};
