const categories = document.getElementById('categories');
const categoriesCount = categories.childElementCount;

console.log(`Number of categories: ${categoriesCount}`);

for (let i = 0; i < categoriesCount; i++){
    const item = categories.children.item(i);

    const name = item.firstElementChild.textContent;
    const elements = item.lastElementChild.children;

    console.log(`Category: ${name}`);
    console.log(`Elements: ${elements.length}`);
}
