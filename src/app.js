import { SimonGame } from './simon-game.js';

customElements.define('simon-game', SimonGame);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () { console.log("Service Worker Registered"); });
}
