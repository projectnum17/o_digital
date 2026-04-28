export const initBricksHandler = () => {
    const container = document.querySelector('.js-brick');
    const bg = document.querySelector('.js-brick-bg');

    if (!container || !bg) return;

    const isTouch = matchMedia('(pointer: coarse)').matches;

    let rect = container.getBoundingClientRect();

    let lastX = rect.width / 2;
    let lastY = rect.height / 2;

    const updateRect = () => {
        rect = container.getBoundingClientRect();

        setCoords(lastX, lastY);
    };

    const setCoords = (x, y) => {
        const bgRect = bg.getBoundingClientRect();

        const localX = x - bgRect.left;
        const localY = y - bgRect.top;

        bg.style.setProperty('--x', `${localX}px`);
        bg.style.setProperty('--y', `${localY}px`);

        container.style.setProperty('--x', `${x}px`);
        container.style.setProperty('--y', `${y}px`);

        lastX = x;
        lastY = y;
    };

    setCoords(lastX, lastY);

    window.addEventListener('resize', updateRect);

    if (!isTouch) {
        window.addEventListener('pointermove', (e) => {
            setCoords(e.clientX, e.clientY);
        });
        return;
    }

    window.addEventListener(
        'scroll',
        () => {
            const viewportHeight = window.innerHeight;

            const progress =
                (viewportHeight - rect.top) / (viewportHeight + rect.height);

            const clamped = Math.max(0, Math.min(1, progress));

            const x = rect.width * 0.5;
            const y = rect.height * clamped;

            setCoords(x, y);
        },
        { passive: true },
    );
};
