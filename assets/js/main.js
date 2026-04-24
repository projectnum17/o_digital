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
import { initSuppliersSliders } from './modules/initSuppliersSliders.js';
import { updateGridTableUIState } from './modules/updateGridTableUIState.js';
import { initSelect } from './modules/initSelect.js';
import { initVideoPlayer } from './modules/initVideoPlayer.js';
import { initToggleUILayout } from './modules/initToggleUILayout.js';

// FOR FEATURE
// import initShowMore from './modules/initShowMore.js';
// FOR FEATURE

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initHeader();
    initVideoAutoPlay();
    initBricksHandler();
    initCeilHandler();
    initResultsSlider();
    initAutoHeightHandler();
    initContactForm();
    initFAQBoxes();
    initValuesCards();
    initProgressScroll();
    updateIntegrationSectionUI();
    initCycleCardsToggle();
    observerHelper('.js-circles-anim', 'is-visible');
    observerHelper('.js-steps-block', 'is-animated', 0.6);
    initSuppliersSliders();
    updateGridTableUIState('.js-supplier-btn', 768, 3, 9);
    updateGridTableUIState('.js-partner-box', 768, 2, 4);
    initSelect();
    initVideoPlayer();
    initToggleUILayout();
    // FOR FEATURE
    // initShowMore('.js-vendors-list', '.js-vendor-box', '.js-vendor-more', 9);
    // initShowMore('.js-areas-list', '.js-areas-box', '.js-areas-more', 4);
    // FOR FEATURE
});
