const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

const updateTextElementFontSize = (newSize) => {
    textElement.style.fontSize = `${newSize}px`;
}

updateTextElementFontSize(fontSizeControl.value);

fontSizeControl.addEventListener('input', event => updateTextElementFontSize(event.target.value));
