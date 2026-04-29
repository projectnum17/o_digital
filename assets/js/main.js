'use strict';

import { initTheme } from './modules/theme.js';
import { initHeader } from './modules/initHeader.js';
import { initMobileMenu } from './modules/initMobileMenu.js';
import { initVideoAutoPlay } from './modules/initVideoAutoPlay.js';
import { initBricksHandler } from './modules/initBricksHandler.js';
import { initCeilHandler } from './modules/initCeilHandler.js';
import { initResultsSlider } from './modules/initResultsSlider.js';
import { initAutoHeightHandler } from './modules/initAutoHeightHandler.js';
import { initContactForm } from './modules/initContactForm.js';
import { initFAQBoxes } from './modules/initFAQBoxes.js';
import { initValuesCards } from './modules/initValuesCards.js';
import { initProgressScroll } from './modules/initProgressScroll.js';
import { updateIntegrationSectionUI } from './modules/updateIntegrationSectionUI.js';
import { initCycleCardsToggle } from './modules/initCycleCardsToggle.js';
import { observerHelper } from './modules/observerHelper.js';
import { initSimpleSliderHelper } from './modules/initSimpleSliderHelper.js';
import { initValuesSlider } from './modules/initValuesSlider.js';
import { updateGridTableUIState } from './modules/updateGridTableUIState.js';
import { initSelect } from './modules/initSelect.js';
import { initVideoPlayer } from './modules/initVideoPlayer.js';
import { initToggleUILayout } from './modules/initToggleUILayout.js';
import { initAnchorsHandler } from './modules/initAnchorsHandler.js';
import { initCountDownEvent } from './modules/initCountDownEvent.js';
import { initHistoryScroll } from './modules/initHistoryScroll.js';
import { initLegalPage } from './modules/initLegalPage.js';
import { reloadWindowHelper } from './modules/reloadWindowHelper.js';
import { initModal } from './modules/initModal.js';
import { initPortalBlock } from './modules/initPortalBlock.js';

// Show more script (remove if u need)
// import initShowMore from './modules/initShowMore.js';

const bodyLock = (() => {
    let locks = 0;

    const update = () => {
        document.body.classList.toggle('is-locked', locks > 0);
    };

    return {
        lock() {
            locks++;
            update();
        },
        unlock() {
            locks = Math.max(0, locks - 1);
            update();
        },
        reset() {
            locks = 0;
            update();
        },
    };
})();

const toTopHandler = () => {
    const btn = document.querySelector('.js-to-top');
    if (!btn) return;
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initHeader();
    initMobileMenu({ bodyLock });
    initVideoAutoPlay();
    initBricksHandler();
    initCeilHandler();
    initResultsSlider();
    initAutoHeightHandler();
    initFAQBoxes();
    initValuesCards();
    initProgressScroll();
    updateIntegrationSectionUI();
    initCycleCardsToggle();
    initValuesSlider();
    observerHelper('.js-circles-anim', 'is-visible');
    observerHelper('.js-steps-block', 'is-animated', 0.6);
    initSimpleSliderHelper({
        parent: '.js-supplier-slider',
        slidesShown: 'auto',
        gap: 24,
        breakpoints: {
            0: {
                spaceBetween: 12,
            },

            768: {
                spaceBetween: 24,
            },
        },
    });
    initSimpleSliderHelper({
        parent: '.js-customers-slider',
        slidesShown: 'auto',
        gap: 22,
        breakpoints: {
            0: {
                spaceBetween: 12,
            },

            768: {
                spaceBetween: 22,
            },
        },
    });
    updateGridTableUIState('.js-supplier-btn', 992, 3, 9);
    updateGridTableUIState('.js-partner-box', 768, 2, 4);
    updateGridTableUIState('.js-article-table', 768, 3, 3);
    updateGridTableUIState('.js-vendor-box', 992, 2, 5);
    initSelect();
    initVideoPlayer();
    initToggleUILayout();
    initLegalPage();
    initAnchorsHandler('.js-article-content');
    initAnchorsHandler('.js-legals-content');
    initCountDownEvent();
    reloadWindowHelper('.js-reload-window');
    initHistoryScroll();
    initModal({
        bodyLock,
        triggerSelector: '.js-search-trigger',
        modalSelector: '.js-search-panel',
        closeSelector: '.js-search-close',
        wrapperSelector: '.js-search-wrapper',

        onOpen: (modal) => {
            const input = modal.querySelector('.js-search-field');

            setTimeout(() => {
                input?.focus();
            }, 100);
        },

        onClose: (modal) => {
            const form = modal.querySelector('form');

            setTimeout(() => {
                form?.reset();
            }, 500);
        },
    });
    initModal({
        bodyLock,
        triggerSelector: '.js-lang-trigger',
        modalSelector: '.js-lang-panel',
        closeSelector: '.js-lang-close',
        wrapperSelector: '.js-lang-wrapper',
    });
    initModal({
        bodyLock,
        triggerSelector: '.js-form-trigger',
        modalSelector: '.js-form-panel',
        closeSelector: '.js-form-close',
        wrapperSelector: '.js-form-wrapper',
        onClose: (modal) => {
            const form = modal.querySelector('form');
            const dateInput = modal.querySelector('.js-date-picker');

            if (dateInput && dateInput.airDatepicker) {
                try {
                    dateInput.airDatepicker.hide();
                } catch (error) {}
            }

            setTimeout(() => {
                form?.reset();
            }, 500);
        },
    });
    const successModal = initModal({
        bodyLock,
        modalSelector: '.js-success-panel',
        closeSelector: '.js-success-close',
        wrapperSelector: '.js-success-wrapper',
        autoCloseDelay: 4000,
    });
    initContactForm(successModal);
    toTopHandler();
    initPortalBlock({
        selector: '.footer__by',
        target: '.footer__copy',
        breakpoint: 991,
    });
    initPortalBlock({
        selector: '.clients__logos',
        target: '.clients__info',
        breakpoint: 767,
    });
    initPortalBlock({
        selector: '.form-box__tcpa',
        target: '.form-box__details',
        breakpoint: 767,
    });
    initPortalBlock({
        selector: '.js-form-panel .form-box__tcpa',
        target: '.js-form-panel .form-box__details',
        breakpoint: 767,
    });
    initPortalBlock({
        selector: '.transform .section-description',
        target: '.transform .transform__wrapper',
        breakpoint: 767,
    });
    initPortalBlock({
        selector: '.business .ticker-logos',
        target: '.business  .business__head',
        breakpoint: 767,
    });
    initPortalBlock({
        selector:
            'body:has(.supplier) section.page-preview .section-description',
        target: '.page-preview__info .page-preview__col:first-child',
        breakpoint: 991,
    });
    initPortalBlock({
        selector:
            '.person-preview .section-description',
        target: '.person-preview .person-preview__col:first-child',
        breakpoint: 767,
    });
    initPortalBlock({
        selector:
            '.cooperation .btn-primary',
        target: '.cooperation .cooperation__projects',
        breakpoint: 767,
    });
    // initPortalBlock({
    //     selector:
    //         'body:has(.partner-info) section.page-preview .section-description',
    //     target: '.page-preview__info .page-preview__col:first-child',
    //     breakpoint: 991,
    // });
    // Show more script (remove if u need)
    // initShowMore('.js-vendors-list', '.js-vendor-box', '.js-vendor-more', 9);
    // initShowMore('.js-areas-list', '.js-areas-box', '.js-areas-more', 4);
});
