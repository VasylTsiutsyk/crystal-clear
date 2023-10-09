import Tooltip from 'tooltip.js';

const button = document.getElementById('my-button');

if (button) {
  const tooltip = new Tooltip(button, {
    html: true,
    delay: 300,
    title: '<p>Some HTML</p>',
    placement: 'top',
    trigger: 'click',
    offset: 8,
  });
}
