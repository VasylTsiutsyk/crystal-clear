// ===== Toggle ===== //
import { CLASS_ACTIVE } from './constants.js';

const accordions = document.querySelectorAll('.toggle');

if (accordions.length > 0) {
  accordions.forEach(el => {
    el.addEventListener('click', e => {
      const control = e.target;
      const self = control.closest('.toggle');
      const content = self.querySelector('.toggle__content');

      if (!self.classList.contains(CLASS_ACTIVE)) {
        accordions.forEach(elem => {
          const selfElem = elem;
          const controlElem = selfElem.querySelector('.toggle__btn');
          const contentElem = selfElem.querySelector('.toggle__content');
          selfElem.classList.remove(CLASS_ACTIVE);
          controlElem.setAttribute('aria-expanded', false);
          contentElem.setAttribute('aria-hidden', true);
          contentElem.style.maxHeight = null;
        });
      }

      if (!self.classList.contains(CLASS_ACTIVE)) {
        self.classList.add(CLASS_ACTIVE);
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = `${content.scrollHeight}px`;
      } else {
        self.classList.remove(CLASS_ACTIVE);
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
}
