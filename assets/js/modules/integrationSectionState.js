export const integrationSectionState = () => {
    const wrapper = document.querySelector('.js-integration-content');
    if (!wrapper) return;

    const wrapperTitle = wrapper.querySelector('.js-integration-title');
    const wrapperDescription = wrapper.querySelector('.js-integration-text');
    const wrapperBoxes = wrapper.querySelectorAll('.js-integration-box');
    if (!wrapperTitle || !wrapperDescription || !wrapperBoxes.length) return;

    if (wrapperBoxes.length < 2) {
        wrapperTitle.textContent = wrapperTitle.dataset.text
        wrapper.classList.add('is-small')
        wrapperDescription.style.display = 'none'
    }
};
