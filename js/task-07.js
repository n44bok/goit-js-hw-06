const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', changeSizeEl);

function changeSizeEl() {
    textEl.style.fontSize = inputEl.value + 'px';
}