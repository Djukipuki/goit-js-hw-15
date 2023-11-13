function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

const changeColor = () => {
    const hex = getRandomHexColor();

    document.body.style.backgroundColor = hex;
    colorSpan.textContent = hex;
}

changeColorBtn.addEventListener('click', changeColor);
