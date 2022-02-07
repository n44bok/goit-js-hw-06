const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const namePickerContainerEl = document.querySelector("#ingredients");

const elements = ingredients.map(option => {
  const newElement = document.createElement('li');
  newElement.textContent = option;
  newElement.classList.add('item');
  

  return newElement;
  
});


console.log(elements)

namePickerContainerEl.append(...elements);
