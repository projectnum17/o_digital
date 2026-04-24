export const initSelect = () => {
    const selects = document.querySelectorAll('.js-select');
    if (!selects.length) return;

    class CustomSelect {
        constructor(originalSelect) {
            if (originalSelect.dataset.customSelectInitialized) return;

            this.originalSelect = originalSelect;
            this.originalSelect.dataset.customSelectInitialized = 'true';

            this.customSelect = null;
            this.trigger = null;
            this.optionsList = null;
            this.isOpen = false;

            this.init();
        }

        init() {
            this.createDOM();
            this.setupListeners();
            this.updateTrigger();
        }

        createDOM() {
            this.customSelect = document.createElement('div');
            this.customSelect.className = 'custom-select-container';
            this.customSelect.tabIndex = 0;

            this.trigger = document.createElement('div');
            this.trigger.className = 'custom-select-trigger';

            this.optionsList = document.createElement('ul');
            this.optionsList.className = 'custom-select-options';

            const fragment = document.createDocumentFragment();
            Array.from(this.originalSelect.options).forEach((option, index) => {
                if (option.disabled) return;

                const li = document.createElement('li');
                li.className = 'custom-select-option';
                li.dataset.value = option.value;
                li.dataset.index = index;
                li.textContent = option.textContent;
                fragment.appendChild(li);
            });

            this.optionsList.appendChild(fragment);
            this.customSelect.append(this.trigger, this.optionsList);

            this.originalSelect.parentNode.insertBefore(
                this.customSelect,
                this.originalSelect,
            );
            this.customSelect.appendChild(this.originalSelect);
        }

        setupListeners() {
            this.customSelect.addEventListener('click', (e) => {
                const optionEl = e.target.closest('.custom-select-option');
                if (optionEl) {
                    this.selectOption(optionEl.dataset.index);
                } else {
                    this.toggle();
                }
            });

            this.customSelect.addEventListener('keydown', (e) =>
                this.handleKeyboard(e),
            );

            document.addEventListener('click', (e) => {
                if (this.isOpen && !this.customSelect.contains(e.target)) {
                    this.close();
                }
            });

            const form = this.originalSelect.closest('form');
            if (form) {
                form.addEventListener('reset', () => {
                    setTimeout(() => this.updateTrigger(), 0);
                });
            }

            this.originalSelect.addEventListener('change', () =>
                this.updateTrigger(),
            );
        }

        toggle() {
            this.isOpen ? this.close() : this.open();
        }

        open() {
            document
                .querySelectorAll('.custom-select-container.is-open')
                .forEach((el) => {
                    if (el !== this.customSelect) el.classList.remove('is-open');
                });

            this.customSelect.classList.add('is-open');
            this.isOpen = true;
        }

        close() {
            this.customSelect.classList.remove('is-open');
            this.isOpen = false;
        }

        selectOption(index) {
            this.originalSelect.selectedIndex = index;

            this.originalSelect.dispatchEvent(
                new Event('change', { bubbles: true }),
            );

            this.close();
            this.customSelect.focus();
        }

        updateTrigger() {
            const selectedOption =
                this.originalSelect.options[this.originalSelect.selectedIndex];
            if (!selectedOption) return;

            this.trigger.textContent = selectedOption.textContent;
            const isPlaceholder =
                selectedOption.value === '' || selectedOption.disabled;
            this.trigger.classList.toggle('placeholder', isPlaceholder);

            const allLis = this.optionsList.querySelectorAll(
                '.custom-select-option',
            );
            allLis.forEach((opt) => opt.classList.remove('is-selected'));

            const activeLi = this.optionsList.querySelector(
                `.custom-select-option[data-index="${this.originalSelect.selectedIndex}"]`,
            );

            if (activeLi) {
                activeLi.classList.add('is-selected');
            }
        }

        handleKeyboard(e) {
            if (e.key === 'Escape') {
                this.close();
                return;
            }

            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggle();
                return;
            }
        }
    }

    selects.forEach((select) => new CustomSelect(select));
};
