document.querySelectorAll('.slider-container').forEach(wrapper => {

  const slider = wrapper.querySelector('.slider');
  const prev = wrapper.querySelector('.btn-prev');
  const next = wrapper.querySelector('.btn-next');

  const imgWidth = 280.75;
  const gap = 8;
  const step = (imgWidth + gap) * 5;

  next.addEventListener('click', () => {
    slider.scrollBy({ left: step, behavior: 'smooth' });
  });

  prev.addEventListener('click', () => {
    slider.scrollBy({ left: -step, behavior: 'smooth' });
  });
});