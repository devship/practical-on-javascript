const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('mail');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('#error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.add('success');

}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('#error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const isValidEmail = email => {
    const reg = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
    return reg.test(String(email).toLowerCase());
}

const validateInput = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(userNameValue === '') {
        setError(userName, 'user name is required');
    }else{
         setSuccess(userName);
    }

    if(emailValue === '') {
        setError(email, 'email is required');
    }else if (!isValidEmail(emailValue)) {
        setError(email, 'provide a valid email address');
    }else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'password is required');
    }else if (passwordValue.length < 8) {
        setError(password, 'password must be 8 characters');
    }else{
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'please confirm your password');
    }else if(password2Value !== passwordValue) {
        setError(password2, 'password doesn\'t match');
    }else{
        setSuccess(password2);
    }
};
