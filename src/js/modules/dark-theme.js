// DARK/LIGHT Theme switch
import { PROJECT_NAME, CLASS_ACTIVE } from './constants';

const ATTR_KEY = 'data-theme';
const ATTR_DARK_VALUE = 'dark';
const ATTR_LIGHT_VALUE = 'light';

const localStorageKey = `${PROJECT_NAME}-theme`;
const toggleSwitch = document.querySelector('[data-theme-switch]');
const currentTheme = localStorage.getItem(localStorageKey);

if (currentTheme) {
  document.documentElement.setAttribute(ATTR_KEY, currentTheme);

  if (currentTheme === ATTR_DARK_VALUE) {
    toggleSwitch.classList.add(CLASS_ACTIVE);
  }
}

toggleSwitch.addEventListener('click', e => {
  e.preventDefault();

  if (toggleSwitch.classList.contains(CLASS_ACTIVE)) {
    toggleSwitch.classList.remove(CLASS_ACTIVE);
    document.documentElement.setAttribute(ATTR_KEY, ATTR_LIGHT_VALUE);
    localStorage.setItem(localStorageKey, ATTR_LIGHT_VALUE);
  } else {
    toggleSwitch.classList.add(CLASS_ACTIVE);
    document.documentElement.setAttribute(ATTR_KEY, ATTR_DARK_VALUE);
    localStorage.setItem(localStorageKey, ATTR_DARK_VALUE);
  }
});
