// ==================== ANIMATIONS ==================== //
// ==================== AOS ==================== //
// DOC: https://michalsnik.github.io/aos/
// import AOS from 'aos';

// AOS.init();

// trigger for custom functions

// document.addEventListener('aos:in', ({ detail }) => {
//  if (detail.classList.contains('anim-value')) {
//    animateValue(detail, parseFloat(detail.firstChild.innerHTML), 600);
//  }
// });

// ==================== GSAP ==================== //
// typical import
import gsap from 'gsap';

// get other plugins:
import ScrollTrigger from 'gsap/ScrollTrigger.js';

// don't forget to register plugins
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.box',
    markers: true, // show markers
    start: 'top 60%',
    end: 'bottom 20%',
    scrub: 1,
  },
});

tl.to('.box', { x: 100, duration: 2 });
