const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientList = document.getElementById('ingredients');

const ingredientItems = [];

ingredients.forEach(function(ingredient) {
    const newIngredient = document.createElement('li');

    newIngredient.textContent = ingredient;
    newIngredient.classList.add('item');

    ingredientItems.push(newIngredient);
});

ingredientList.append(...ingredientItems);
