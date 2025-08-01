const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkInputs()
})

const checkInputs = () => {
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if (usernameValue === '') {
        setError(username, 'Insert Your Name')
    }else {
        setSuccess(username)
    }

    if (emailValue === '') {
        setError(emailValue, 'Insert Your Email')
    }else {
        setSuccess(email)
    }

    if (passwordValue === '') {
        setError(passwordValue, 'Insert Your Password')
    }else {
        setSuccess(password)
    }

    if (password2Value === '') {
        setError(password2, 'Insert Your password agian to verfiy')
    }
        else if (passwordValue !== password2Value){
            setError(password2, 'Your password is invlaid')
        }
    else {
        setSuccess(password2)
    }
}

const setError = (input, massage) => {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    formControl.className = 'form-control error'
    small.innerText = massage
}

const setSuccess = (input) => {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

