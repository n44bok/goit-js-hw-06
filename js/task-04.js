let counterValue = 0;

const handleClickDecr = () => {
    value.textContent = counterValue -= 1
}

const handleClickIncr = () => {
    value.textContent = counterValue += 1
}

const btnDcr = document.querySelector('button[data-action="decrement"]');
btnDcr.addEventListener('click', handleClickDecr);

const btnIncr = document.querySelector('button[data-action="increment"]');
btnIncr.addEventListener('click', handleClickIncr);

const counter = document.querySelector('#counter')

const value = document.querySelector('#value')






console.log(counterValue);
