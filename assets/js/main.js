'use strict';

import { themeSwitcher as theme } from './modules/theme.js';
import { videoAsyncState as videoBG } from './modules/videoAsyncState.js';
import { headerStates as header } from './modules/headerStates.js';
import { brickBGHandler as bricks } from './modules/brickBGHandler.js';
import { ceilBGHandler as ceils } from './modules/ceilBGHandler.js';
import { resultSliderHandler as results } from './modules/resultSliderHandler.js';
import { seoExpandHandler as seo } from './modules/seoExpandHandler.js';
import { contactsFormsHandler as forms } from './modules/contactsFormsHandler.js';
import initShowMore from './modules/initShowMore.js';
import faqBoxHandler from './modules/faqBoxHandler.js';
import { circlesBGHandler as circles } from './modules/circlesBGHandler.js';
import { progressScrollHandler as progress } from './modules/progressScrollHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    theme();
    header();
    videoBG();
    bricks();
    ceils();
    results();
    seo();
    forms();
    // initShowMore('.js-vendors-list', '.js-vendor-box', '.js-vendor-more', 9);
    // initShowMore('.js-areas-list', '.js-areas-box', '.js-areas-more', 4);
    faqBoxHandler();
    circles();
    progress();
});
