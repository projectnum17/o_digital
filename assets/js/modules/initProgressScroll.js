export const initProgressScroll = () => {
    const infoBlock = document.querySelector('.js-advantages-info');
    const boxes = document.querySelectorAll('.js-advantages-box');

    if (!infoBlock || !boxes.length) return;

    if (infoBlock) {
        let ticking = false;

        const updateProgress = () => {
            const rect = infoBlock.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const startPoint = windowHeight * 0.6;
            const endPoint = windowHeight * 0.4;

            const totalScrollDistance = rect.height + (startPoint - endPoint);
            const currentScroll = startPoint - rect.top;

            let progress = currentScroll / totalScrollDistance;
            progress = Math.max(0, Math.min(1, progress));

            infoBlock.style.setProperty('--progress', progress);

            boxes.forEach((box) => {
                const rect = box.getBoundingClientRect();
                const boxCenter = rect.top + rect.height / 2 + 5;
                const screenCenter = window.innerHeight / 2;

                if (boxCenter < screenCenter) {
                    box.classList.add('is-active');
                } else {
                    box.classList.remove('is-active');
                }
            });

            ticking = false;
        };

        window.addEventListener(
            'scroll',
            () => {
                if (!ticking) {
                    requestAnimationFrame(updateProgress);
                    ticking = true;
                }
            },
            { passive: true },
        );

        window.addEventListener('resize', updateProgress);

        updateProgress();
    }
};
