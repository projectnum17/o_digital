export const initContactForm = (successModal) => {
    const forms = document.querySelectorAll('form');
    if (!forms.length) return;

    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (form.querySelector('.js-search-field')) return;

            const canShowSuccess =
                successModal && typeof successModal.open === 'function';

            if (canShowSuccess) {
                successModal.open();

                const modalForm = form.closest('.js-form-panel');
                if (modalForm && typeof modalForm.close === 'function') {
                    modalForm.close();
                }
            }
            form.reset();
        });
    });

    const datePickerHandler = () => {
        const planningBlocks = document.querySelectorAll(
            '.js-planning-wrapper',
        );
        if (!planningBlocks.length) return;

        const localeUk = {
            days: [
                'Неділя',
                'Понеділок',
                'Вівторок',
                'Середа',
                'Четвер',
                "П'ятниця",
                'Субота',
            ],
            daysShort: ['Нед', 'Пон', 'Вів', 'Сер', 'Чет', "П'ят", 'Суб'],
            daysMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            months: [
                'Січень',
                'Лютий',
                'Березень',
                'Квітень',
                'Травень',
                'Червень',
                'Липень',
                'Серпень',
                'Вересень',
                'Жовтень',
                'Листопад',
                'Грудень',
            ],
            monthsShort: [
                'Січ',
                'Лют',
                'Бер',
                'Кві',
                'Тра',
                'Чер',
                'Лип',
                'Сер',
                'Вер',
                'Жов',
                'Лис',
                'Гру',
            ],
            today: 'Сьогодні',
            clear: 'Очистити',
            dateFormat: 'dd.MM.yyyy',
            timeFormat: 'HH:mm',
            firstDay: 1,
        };

        const localeEn = {
            days: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            monthsShort: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            today: 'Today',
            clear: 'Clear',
            dateFormat: 'dd/MM/yyyy',
            timeFormat: 'HH:mm',
            firstDay: 1,
        };

        const currentLang = document.documentElement.lang;
        const selectedLang = currentLang === 'en' ? localeEn : localeUk;

        planningBlocks.forEach((block) => {
            const dateInput = block.querySelector('.js-date-picker');
            const dateText = block.querySelector('.js-date-text');
            const dateRadio = block.querySelector('.js-date-radio');
            const allRadios = block.querySelectorAll('input[type="radio"]');

            if (!dateInput || !dateText || !dateRadio) return;

            const defaultText = dateText.textContent;

            const dp = new AirDatepicker(dateInput, {
                locale: selectedLang,
                autoClose: true,
                classes: 'custom-datepicker-offset',
                position: 'bottom right',
                onSelect({ date }) {
                    if (date) {
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(
                            2,
                            '0',
                        );
                        const year = date.getFullYear();

                        dateText.textContent = `${day}/${month}/${year}`;
                        dateText.classList.add('is-date');
                        dateRadio.checked = true;
                    } else {
                        dateText.textContent = defaultText;
                        dateText.classList.remove('is-date');
                    }
                },
                onHide() {
                    if (dp.selectedDates.length === 0) {
                        dateRadio.checked = false;
                        dateText.textContent = defaultText;
                    }
                },
            });

            dateInput.airDatepicker = dp;

            const resetDateState = () => {
                dp.clear();
                dateText.textContent = defaultText;

                dateRadio.checked = false;

                block
                    .querySelectorAll('input[type="checkbox"]')
                    .forEach((cb) => {
                        cb.checked = false;
                    });
            };

            const closeOnScroll = () => {
                if (dp.visible) {
                    dp.hide();
                }
            };

            const scrollParent =
                dateInput.closest('.modal__box') || dateInput.closest('.modal');

            window.addEventListener('scroll', closeOnScroll, { passive: true });

            if (scrollParent) {
                scrollParent.addEventListener('scroll', closeOnScroll, {
                    passive: true,
                });
            }

            window.addEventListener('touchmove', closeOnScroll, {
                passive: true,
            });

            window.addEventListener('resize', closeOnScroll);

            const parentForm = block.closest('form');
            if (parentForm) {
                parentForm.addEventListener('reset', resetDateState);
            }

            const dateHandler = dateRadio.closest('.form-box__handler');

            dateHandler.addEventListener('click', (e) => {
                if (e.target.tagName !== 'INPUT') {
                    dp.show();
                }
            });

            allRadios.forEach((radio) => {
                radio.addEventListener('change', () => {
                    if (radio === dateRadio) {
                        dp.show();
                    } else {
                        resetDateState();
                        try {
                            dp.hide();
                        } catch (error) {}
                    }
                });
            });
        });
    };

    datePickerHandler();
};
