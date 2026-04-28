export const initModal = ({
    bodyLock,
    triggerSelector,
    modalSelector,
    closeSelector,
    wrapperSelector,
    onOpen,
    onClose,
    autoCloseDelay,
}) => {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);

    if (!modal) return;

    const closeBtns = modal.querySelectorAll(closeSelector);
    const wrapper = wrapperSelector
        ? modal.querySelector(wrapperSelector)
        : null;

    let autoCloseTimer = null;

    const open = () => {
        modal.classList.add('is-show');
        bodyLock.lock();

        if (typeof onOpen === 'function') {
            onOpen(modal);
        }

        if (autoCloseDelay) {
            clearTimeout(autoCloseTimer);

            autoCloseTimer = setTimeout(() => {
                close();
            }, autoCloseDelay);
        }
    };

    const close = () => {
        modal.classList.remove('is-show');
        bodyLock.unlock();

        if (autoCloseTimer) {
            clearTimeout(autoCloseTimer);
            autoCloseTimer = null;
        }

        if (typeof onClose === 'function') {
            onClose(modal);
        }
    };

    modal.open = open;
    modal.close = close;

    if (triggers.length) {
        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                open();
            });
        });
    }

    if (closeBtns.length) {
        closeBtns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                close();
            });
        });
    }

    if (wrapper) {
        modal.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) {
                close();
            }
        });
    }

    return { open, close };
};
