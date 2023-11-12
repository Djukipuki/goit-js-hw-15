const validationInput = document.getElementById('validation-input');

const validator = (event) => {
    const classList = validationInput.classList;

    if (event.target.value.length >= validationInput.dataset.length) {
        classList.add('valid');
        classList.remove('invalid');
    } else {
        classList.add('invalid');
        classList.remove('valid');
    }
}

validationInput.addEventListener('blur', validator);
