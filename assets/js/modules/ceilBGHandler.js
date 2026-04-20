export const ceilBGHandler = () => {
    const section = document.querySelector('section:has(.js-ceil-bg)');
    const bg = section?.querySelector('.js-ceil-bg');

    if (!section || !bg) return;

    const sampleSvg = bg.querySelector('svg');
    if (!sampleSvg) return;
    const totalCells = sampleSvg.querySelectorAll('rect').length;

    const svgs = bg.querySelectorAll('svg');
    const cellSize = 121.105;
    const cols = 6;

    let lastIndex = -1;
    let currentCells = [];

    section.addEventListener('mousemove', (e) => {
        const bgRect = bg.getBoundingClientRect();

        const x = e.clientX - bgRect.left;
        const y = e.clientY - bgRect.top;

        const col = Math.floor(x / cellSize);
        const row = Math.floor(y / cellSize);

        if (col < 0 || col >= cols || row < 0) return;

        const index = row * cols + col;

        if (index >= 0 && index < totalCells && index !== lastIndex) {
            currentCells.forEach((cell) => {
                cell.classList.remove('is-current');
                cell.classList.add('active');
                setTimeout(() => {
                    cell.classList.remove('active');
                }, 50);
            });

            currentCells = [];

            svgs.forEach((svg) => {
                const cells = svg.querySelectorAll('rect');
                const cell = cells[index];

                if (cell) {
                    cell.classList.add('is-current');
                    currentCells.push(cell);
                }
            });

            lastIndex = index;
        }
    });
};
