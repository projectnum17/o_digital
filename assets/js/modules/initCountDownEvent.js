export const initCountDownEvent = () => {
    const countdowns = document.querySelectorAll('.js-countdown');
    if (!countdowns.length) return;

    countdowns.forEach((countdown) => {
        const endDateStr = countdown.getAttribute('data-end-date');
        if (!endDateStr) return;

        const targetDate = new Date(endDateStr).getTime();

        if (isNaN(targetDate)) {
            console.error('Неверный формат даты для таймера:', endDateStr);
            return;
        }

        const daysEl = countdown.querySelector('.js-timer-days');
        const hoursEl = countdown.querySelector('.js-timer-hours');
        const minutesEl = countdown.querySelector('.js-timer-minutes');
        const secondsEl = countdown.querySelector('.js-timer-seconds');

        const clockWrapper = countdown.querySelectorAll('.js-timer-clock');
        const messageEl = countdown.querySelector('.js-timer-message');

        let timerInterval;

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(timerInterval);

                clockWrapper.forEach((el) => (el.style.display = 'none'));
                if (messageEl) messageEl.classList.add('is-visible')
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60),
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (daysEl) daysEl.textContent = days;
            if (hoursEl)
                hoursEl.textContent = hours.toString().padStart(2, '0');
            if (minutesEl)
                minutesEl.textContent = minutes.toString().padStart(2, '0');
            if (secondsEl)
                secondsEl.textContent = seconds.toString().padStart(2, '0');
        };

        updateTimer();

        timerInterval = setInterval(updateTimer, 1000);
    });
};
