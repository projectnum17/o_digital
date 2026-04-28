export const initPortalBlock = ({ selector, target, breakpoint }) => {
    const portalSelector = document.querySelector(selector);
    const targetSelector = document.querySelector(target);

    if (!portalSelector || !targetSelector) return;

    const originalParent = portalSelector.parentNode;
    const originalNextSibling = portalSelector.nextSibling;

    const check = () => {
        if (window.innerWidth <= breakpoint) {
            if (!targetSelector.contains(portalSelector)) {
                targetSelector.appendChild(portalSelector);
            }
        } else {
            if (portalSelector.parentNode !== originalParent) {
                if (originalNextSibling) {
                    originalParent.insertBefore(
                        portalSelector,
                        originalNextSibling,
                    );
                } else {
                    originalParent.appendChild(portalSelector);
                }
            }
        }
    };

    check();
    window.addEventListener('resize', check);
};
