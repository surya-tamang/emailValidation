let errorMessage = document.querySelector('#errorMsg');
let email = document.querySelector('#email');
let button = document.querySelector('button');
let validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener('click', () => {
    if (email.value.match(validation)) {
        alert('Subscribed successfully')
        return true;
    }
    else {
        document.querySelector('input').style.outlineColor = "red";
        document.querySelector('input').style.color = "red";
        errorMessage.style.display = "block";
        return false
    }
});


