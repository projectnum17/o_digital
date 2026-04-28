export const initTheme = () => {
    const toggles = document.querySelectorAll('.js-theme-trigger');

    if (!toggles.length) return;

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('currentTheme');

    let currentTheme = savedTheme || (darkQuery.matches ? 'dark' : 'light');

    applyTheme(currentTheme, !!savedTheme);

    toggles.forEach((toggle) => {
        toggle.addEventListener('change', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(currentTheme, true);
        });
    });

    darkQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('currentTheme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            applyTheme(currentTheme, false);
        }
    });

    function applyTheme(theme, persist = true) {
        const html = document.documentElement;

        html.classList.toggle('dark', theme === 'dark');
        html.classList.toggle('light', theme === 'light');

        toggles.forEach((toggle) => {
            toggle.checked = theme === 'light';
        });

        if (persist) {
            localStorage.setItem('currentTheme', theme);
        }
    }
};
