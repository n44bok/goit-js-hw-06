const categoryNum = document.querySelectorAll('.item');

console.log("Number of categories:", categoryNum.length);

categoryNum.forEach(function (category) {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Elements: ', category.lastElementChild.children.length);
});

