export const themeSwitcher = () => {
    const toggle = document.querySelector('#themeSwitcher');

    if (!toggle) return;

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const savedTheme = localStorage.getItem('currentTheme');

    let currentTheme = savedTheme || (darkQuery.matches ? 'dark' : 'light');

    applyTheme(currentTheme, !!savedTheme);

    toggle.addEventListener('change', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme, true);
    });

    darkQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem('currentTheme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            applyTheme(currentTheme, false);
        }
    });

    function applyTheme(theme, persist = true) {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('light', theme === 'light');

        toggle.checked = theme === 'light';

        if (persist) {
            localStorage.setItem('currentTheme', theme);
        }
    }
};
