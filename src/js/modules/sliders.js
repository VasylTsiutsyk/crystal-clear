// ===== SLIDER ===== //
// DOC: https://swiperjs.com/

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

new Swiper('#swiper-reviews', {
  modules: [Navigation, Pagination],
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 8,
  navigation: {
    nextEl: '#swiper-reviews-next',
    prevEl: '#swiper-reviews-prev',
  },
  pagination: {
    el: '#swiper-reviews-pagination',
    clickable: true,
  },
});
