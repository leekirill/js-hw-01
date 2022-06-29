const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const allIngredients = document.querySelector('ul#ingredients');

ingredients.map(e =>
    allIngredients.insertAdjacentHTML('afterend', `<li>${e}</li>`),
);
