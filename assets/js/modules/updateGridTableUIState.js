export const updateGridTableUIState = (
    selector,
    breakpoint,
    mobileCols,
    desktopCols,
) => {
    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    const update = () => {
        const cols = window.innerWidth < breakpoint ? mobileCols : desktopCols;

        const rows = Math.ceil(items.length / cols);
        const lastRowStart = (rows - 1) * cols;

        items.forEach((item, index) => {
            item.classList.remove('no-border');

            if (index >= lastRowStart) {
                item.classList.add('no-border');
            }
        });
    };

    update();

    let timeout;

    window.addEventListener('resize', () => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            update();
        }, 100);
    });
};
