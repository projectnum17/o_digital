export const updateGridTableUIState = (
    selector,
    breakpoint,
    mobileCols,
    desktopCols,
) => {
    const items = document.querySelectorAll(selector);
    if (!items.length) return;

    let cols;
    window.innerWidth < breakpoint ? (cols = mobileCols) : (cols = desktopCols);
    const rows = Math.ceil(items.length / cols);
    const lastRowStart = (rows - 1) * cols;

    items.forEach((item, index) => {
        if (index >= lastRowStart) {
            item.classList.add('no-border');
        }
    });
};
