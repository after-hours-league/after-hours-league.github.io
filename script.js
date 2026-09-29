const toggle = document.querySelector('.motion-toggle');
const video = document.querySelector('video');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function syncControl() {
  const paused = video.paused;
  document.body.classList.toggle('paused', paused);
  toggle.setAttribute('aria-pressed', String(paused));
  toggle.setAttribute('aria-label', paused ? 'Play logo animation' : 'Pause logo animation');
  toggle.querySelector('span').textContent = paused ? 'Play motion' : 'Pause motion';
}
async function playVideo() {
  try { await video.play(); } catch { /* Keep a manual play control if autoplay is blocked. */ }
  syncControl();
}
toggle.addEventListener('click', () => {
  if (video.paused) playVideo(); else video.pause();
});
video.addEventListener('play', syncControl);
video.addEventListener('pause', syncControl);
reducedMotion.addEventListener('change', event => {
  if (event.matches) video.pause();
});
video.muted = true;
syncControl();
if (!reducedMotion.matches) playVideo();
