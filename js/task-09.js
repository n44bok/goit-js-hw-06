function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector('span');
const btnEl = document.querySelector('button');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', colorChangeBody);

function colorChangeBody () {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
  
}


