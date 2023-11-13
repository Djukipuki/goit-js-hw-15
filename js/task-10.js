function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const boxDefaultSize = 30;
const boxSizeStep = 10;

const inputValue = document.querySelector('#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const boxList = document.getElementById('boxes');

const createBoxes = (amount) => {
    const boxes = [];

    let width = boxDefaultSize;
    let height = boxDefaultSize;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');

        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
        box.style.margin = `10px`;

        width += boxSizeStep;
        height += boxSizeStep;

        boxes.push(box);
    }

    boxList.append(...boxes);
}

const destroyBoxes = () => {
    boxList.innerHTML = '';
}

createBtn.addEventListener('click', () => createBoxes(inputValue.value));
destroyBtn.addEventListener('click', () => destroyBoxes());
