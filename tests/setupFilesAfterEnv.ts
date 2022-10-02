import '@testing-library/jest-dom';

window.requestAnimationFrame = window.setTimeout;
window.cancelAnimationFrame = window.clearTimeout;
