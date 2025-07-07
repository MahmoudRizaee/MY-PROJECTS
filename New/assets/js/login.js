
const forgotLink = document.getElementById('forgotLink');
const backToLogin = document.getElementById('backToLogin');
const loginFields = document.getElementById('loginFields');
const forgotFields = document.getElementById('forgotFields');
const formTitle = document.getElementById('formTitle');
const forgotBtn = document.getElementById('forgotBtn');
const emailForgotInput = document.getElementById('emailForgot');

forgotLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginFields.style.display = 'none';
    forgotFields.style.display = 'block';
    formTitle.textContent = 'Forgot Password';
});

backToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    forgotFields.style.display = 'none';
    loginFields.style.display = 'block';
    formTitle.textContent = 'Welcome';
});

emailForgotInput.addEventListener('input', () => {
    forgotBtn.disabled = !emailForgotInput.checkValidity();
});

document.getElementById('authForm').addEventListener('submit', e => {
    e.preventDefault();
    if (loginFields.style.display !== 'none') {
        alert('Logging in...');
    } else {
        alert('Recovery email sent!');
    }
});
