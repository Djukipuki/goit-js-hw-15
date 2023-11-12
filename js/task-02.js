const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientList = document.getElementById('ingredients');

const ingredientItemsFragment = document.createDocumentFragment();

ingredients.forEach(function(ingredient) {
    const newIngredient = document.createElement('li');

    newIngredient.textContent = ingredient;
    newIngredient.classList.add('item');

    ingredientItemsFragment.appendChild(newIngredient);
});

ingredientList.appendChild(ingredientItemsFragment);
