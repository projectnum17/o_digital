const initShowMore = (listSelector, itemSelector, btnSelector, limit) => {
    const list = document.querySelector(listSelector);
    const moreBtn = document.querySelector(btnSelector);

    if (!list || !moreBtn) return;

    const items = list.querySelectorAll(itemSelector);

    if (items.length <= limit) {
        moreBtn.style.display = 'none';
        return;
    }

    items.forEach((item, i) => {
        if (i >= limit) {
            item.style.display = 'none';
        }
    });

    moreBtn.style.display = '';

    moreBtn.addEventListener('click', (e) => {
        e.preventDefault();

        items.forEach((item) => (item.style.display = ''));
        moreBtn.style.display = 'none';
    });
};

export default initShowMore;
