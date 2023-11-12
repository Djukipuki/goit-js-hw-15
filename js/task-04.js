let counterValue = 0;

const counterElement = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

incrementBtn.addEventListener('click', () => {
    counterValue++;

    updateCounterElement();
});

decrementBtn.addEventListener('click', () => {
    counterValue--;

    updateCounterElement();
})

function updateCounterElement() {
    counterElement.textContent = counterValue.toString();
}
