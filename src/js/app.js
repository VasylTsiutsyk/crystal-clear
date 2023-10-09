/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

import { isWebp, isMobile } from './modules/functions.js';

import './modules/image-comparison.js';

// -----------------LIBS-------------------//
// SLIDERS
// https://swiperjs.com/
import './modules/sliders.js';

import './modules/rating.js';

// IS WEBP TEST
isWebp();

// IS MOBILE TEST
isMobile();
