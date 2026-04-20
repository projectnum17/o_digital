export const seoExpandHandler = () => {
    const sections = document.querySelectorAll('.seo');

    sections.forEach((section) => {
        const textBox = section.querySelector('.js-text-box');
        const btn = section.querySelector('.js-text-more');

        if (!textBox || !btn) return;

        btn.addEventListener('click', () => {
            const fullHeight = textBox.scrollHeight;

            // Устанавливаем полную высоту
            textBox.style.height = `${fullHeight}px`;

            // Добавляем класс, чтобы скрыть градиент
            textBox.classList.add('is-open');

            // Скрываем кнопку
            btn.classList.add('is-hidden');

            // После завершения анимации (500мс) можно выставить height: auto,
            // чтобы блок адекватно реагировал на ресайз окна
            setTimeout(() => {
                textBox.style.height = 'auto';
            }, 500);
        });
    });
};
