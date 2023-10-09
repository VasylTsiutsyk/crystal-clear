function initComparisons() {
  function compareImages(img) {
    var img;
    let clicked = 0;
    let w;
    let h;

    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;

    /* Set the width of the img element to 50%: */
    img.style.width = `${w / 2}px`;

    /* Create slider: */
    const slider = document.createElement('DIV');
    slider.classList.add('img-comp__slider');

    /* Insert slider */
    img.parentElement.insertBefore(slider, img);

    /* Position the slider in the middle: */
    slider.style.top = `${h / 2 - slider.offsetHeight / 2}px`;
    slider.style.left = `${w / 2 - slider.offsetWidth / 2}px`;

    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener('mousedown', slideReady);

    /* And another function when the mouse button is released: */
    window.addEventListener('mouseup', slideFinish);

    /* Or touched (for touch screens: */
    slider.addEventListener('touchstart', slideReady);

    /* And released (for touch screens: */
    window.addEventListener('touchend', slideFinish);

    function slideReady(e) {
      e.preventDefault();

      clicked = 1;

      window.addEventListener('mousemove', slideMove);
      window.addEventListener('touchmove', slideMove);
    }

    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }

    function slideMove(e) {
      let pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked === 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e);

      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }

    function getCursorPos(e) {
      let a;
      let x = 0;

      e = e.changedTouches ? e.changedTouches[0] : e;

      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();

      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;

      /* Consider any page scrolling: */
      x -= window.pageXOffset;
      return x;
    }

    function slide(x) {
      /* Resize the image: */
      img.style.width = `${x}px`;

      /* Position the slider: */
      slider.style.left = `${img.offsetWidth - slider.offsetWidth / 2}px`;
    }

    function handleScroll() {
      // Get the position of the slider relative to the viewport
      const sliderRect = slider.getBoundingClientRect();

      // Check if the slider is within the viewport vertically
      if (
        sliderRect.top >= 0 &&
        sliderRect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        // If the slider is in the viewport, move the scrubber based on scroll position
        const scrollPercentage = (sliderRect.top / window.innerHeight) * 100;
        const newPos = (w * scrollPercentage) / 100;

        // Call the slide function to move the scrubber
        slide(newPos);
      }
    }

    window.addEventListener('scroll', handleScroll);
  }

  const overlays = document.getElementsByClassName('img-comp__img--overlay');

  [...overlays].forEach(overlay => {
    compareImages(overlay);
  });
}

initComparisons();
