const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('change', changeSizeEl);

function changeSizeEl() {
    textEl.style.fontSize = inputEl.value + 'px';
}