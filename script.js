const video = document.querySelector('video');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
video.muted = true;
function syncMotion() {
  if (reducedMotion.matches) video.pause();
  else video.play().catch(() => { /* Retain the poster if autoplay is blocked. */ });
}
reducedMotion.addEventListener('change', syncMotion);
syncMotion();
