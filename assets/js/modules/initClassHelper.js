export const initClassHelper = (selector, className) => {
    const targets = document.querySelectorAll(selector);
    if (!targets.length) return;
    targets.forEach((target) => target.classList.add(className));
};
