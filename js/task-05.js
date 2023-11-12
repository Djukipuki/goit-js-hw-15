const defaultOutputText = 'Anonymous';

const outputElement = document.getElementById('name-output');
const inputElement = document.getElementById('name-input');

inputElement.addEventListener('input', event => updateOutputElement(event.target.value));

const updateOutputElement = newText => {
    outputElement.innerText = newText || defaultOutputText;
}
