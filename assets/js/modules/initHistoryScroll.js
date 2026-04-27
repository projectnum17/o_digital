export const initHistoryScroll = () => {
    const infoBlock = document.querySelector('.js-history-timeline');
    const boxes = document.querySelectorAll('.js-history-box');

    if (!infoBlock || !boxes.length) return;

    // Константа смещения центра кружка от верха <li>
    // margin-top: 20px + (height: 28px / 2) = 34px
    const DOT_OFFSET = 34;

    const updateProgress = () => {
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.5;
        const containerRect = infoBlock.getBoundingClientRect();

        const firstBox = boxes[0].getBoundingClientRect();
        const lastBox = boxes[boxes.length - 1].getBoundingClientRect();

        const startY = firstBox.top + DOT_OFFSET - containerRect.top;
        const endY = lastBox.top + DOT_OFFSET - containerRect.top;
        const fullHeight = endY - startY;

        infoBlock.style.setProperty('--line-top', `${startY}px`);
        infoBlock.style.setProperty('--line-full-height', `${fullHeight}px`);

        const currentScrollPixels = triggerPoint - (firstBox.top + DOT_OFFSET);

        // Ограничиваем высоту активной линии от 0 до fullHeight
        let activeHeight = Math.max(
            0,
            Math.min(fullHeight, currentScrollPixels),
        );
        infoBlock.style.setProperty('--line-height', `${activeHeight}px`);

        boxes.forEach((box) => {
            const rect = box.getBoundingClientRect();
            const dotCenter = rect.top + DOT_OFFSET;

            if (dotCenter <= triggerPoint) {
                box.classList.add('is-active');
            } else {
                box.classList.remove('is-active');
            }
        });
    };

    let ticking = false;
    window.addEventListener(
        'scroll',
        () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    updateProgress();
                    ticking = false;
                });
                ticking = true;
            }
        },
        { passive: true },
    );

    window.addEventListener('resize', updateProgress);
    updateProgress();
};
