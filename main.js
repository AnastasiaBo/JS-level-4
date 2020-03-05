'use strict'
let text = document.getElementById('dialog');
document.getElementById('replace').addEventListener('click', () => {
    text.textContent = text.textContent.replace(/'/g, '"');
    text.textContent = text.textContent.replace(/\B'|'\B/g, '"');
});