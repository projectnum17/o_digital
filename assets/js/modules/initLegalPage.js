export const initLegalPage = () => {
    const targets = document.querySelectorAll('.js-legals-info h2');
    const container = document.querySelector('.js-legals-info');
    if (!targets.length || !container) return;

    targets.forEach((target) => target.classList.add('js-anchor-title'));
    const children = Array.from(container.children);

    let wrapper = null;

    children.forEach((el) => {
        if (el.tagName === 'H2') {
            wrapper = document.createElement('div');
            wrapper.classList.add('js-anchor-target');
            container.insertBefore(wrapper, el);
            wrapper.appendChild(el);
        } else {
            if (!wrapper) {
                wrapper = document.createElement('div');
                wrapper.classList.add('js-anchor-target');
                container.prepend(wrapper);
                wrapper.appendChild(el);
            } else {
                wrapper.appendChild(el);
            }
        }
    });
};
