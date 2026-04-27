'use strict';

import { initTheme } from './modules/theme.js';
import { initHeader } from './modules/initHeader.js';
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

// Show more script (remove if u need)
// import initShowMore from './modules/initShowMore.js';

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
    observerHelper('.js-circles-anim', 'is-visible');
    observerHelper('.js-steps-block', 'is-animated', 0.6);
    initSimpleSliderHelper({
        parent: '.js-supplier-slider',
        slidesShown: 'auto',
        gap: 24,
    });
    initSimpleSliderHelper({
        parent: '.js-customers-slider',
        slidesShown: 'auto',
        gap: 22,
    });
    updateGridTableUIState('.js-supplier-btn', 768, 3, 9);
    updateGridTableUIState('.js-partner-box', 768, 2, 4);
    updateGridTableUIState('.js-article-table', 768, 2, 3);
    updateGridTableUIState('.js-vendor-box', 768, 2, 5);
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
        triggerSelector: '.js-lang-trigger',
        modalSelector: '.js-lang-panel',
        closeSelector: '.js-lang-close',
        wrapperSelector: '.js-lang-wrapper',
    });
    initModal({
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
        modalSelector: '.js-success-panel',
        closeSelector: '.js-success-close',
        wrapperSelector: '.js-success-wrapper',
        autoCloseDelay: 4000,
    });
    initContactForm(successModal);
    toTopHandler();
    // Show more script (remove if u need)
    // initShowMore('.js-vendors-list', '.js-vendor-box', '.js-vendor-more', 9);
    // initShowMore('.js-areas-list', '.js-areas-box', '.js-areas-more', 4);
});
