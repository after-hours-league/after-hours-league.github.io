const toggle = document.querySelector('.motion-toggle');
toggle.addEventListener('click', () => {
  const paused = document.body.classList.toggle('paused');
  toggle.setAttribute('aria-pressed', String(paused));
  toggle.setAttribute('aria-label', paused ? 'Play logo animation' : 'Pause logo animation');
  toggle.querySelector('span').textContent = paused ? 'Play motion' : 'Pause motion';
});
