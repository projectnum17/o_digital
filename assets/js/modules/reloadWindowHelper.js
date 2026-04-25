export const reloadWindowHelper = (selector) => {
    const reloadBtn = document.querySelector(selector);
    if (!reloadBtn) return;

    reloadBtn.addEventListener('click', () => {
        location.reload();
    });
};
