document.querySelectorAll('.slider-container').forEach(wrapper => {
  const slider = wrapper.querySelector('.slider');
  const prev = wrapper.querySelector('.btn-prev');
  const next = wrapper.querySelector('btn-next');

  const scrollAmount = () => slider.clientWidth - 100;

  next.addEventListener('click', () => {
    slider.scrollBy({ left: scrollAmount() });
  });

  prev.addEventListener('click', () => {
    slider.scrollBy({ left: -scrollAmount() });
  });

  function updateArrows() {
    prev.classList.toggle('hidden', slider.scrollLeft <= 0);
    next.classList.toggle(
      'hidden',
      slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1
    );
  }

  slider.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
});