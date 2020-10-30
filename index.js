const form = document.querySelector('form');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

function showError(field, message) {
    field.nextElementSibling.classList.add('error');
    field.nextElementSibling.innerText = message
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    fName.nextElementSibling.classList.remove('error');
    lName.nextElementSibling.classList.remove('error');
    email.nextElementSibling.classList.remove('error');
    msg.nextElementSibling.classList.remove('error');

    if (fName.value === '') {
        showError(fName, 'First name is required')
    }
    if (lName.value === '') {
        showError(lName, 'Last name is required')
    }
    if (email.value === '') {
        showError(email, 'Email address is required')
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email address is not valid')
    }
    if (msg.value === '') {
        showError(msg, 'Message content is required')
    }
})