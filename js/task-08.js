const loginForm = document.querySelector('.login-form');

const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
        return alert('All fields are required');
    }

    const userData = {
        email: email,
        password: password,
    };

    console.log(userData);

    form.reset();
}

loginForm.addEventListener('submit', onSubmit);
