import { SimonGame } from './component/simon-game/simon-game.js';

customElements.define('simon-game', SimonGame);

// loading animation
const loader = document.getElementById('loader');
setTimeout(() => {
    loader.firstChild.classList.add('rotating');
}, 700);
setTimeout(() => {
    loader.classList.add('is-hidden');
}, 1400);
setTimeout(() => {
    loader.remove();
}, 3400);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () { console.log("Service Worker Registered"); });
}
