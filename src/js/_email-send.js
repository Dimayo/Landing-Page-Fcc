(function emailSend() {

    let emailForm = document.querySelector('.form'),
        sendEmailForm = document.querySelector('.form__send'),
        submit = document.querySelector('.form__submit'),
        email = document.querySelector('.form__email');

    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        sendEmailForm.style.display = 'flex';
        submit.style = 'pointer-events: none';
        email.style = 'pointer-events: none';
    });
})();