const inputEl = document.querySelector('#font-size-control'),
   

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === "") {
        refs.nameLabel.textContent = 'Anonymous';
    } else {
        refs.nameLabel.textContent = event.currentTarget.value;
    }

    
    
}


