(function modalWindow() {

    let order = document.querySelectorAll('.menu__order'),
        overlay = document.querySelector('.overlay'),
        closeModal = document.querySelector('.popup__close'),
        form = document.querySelector('.popup__form'),
        sendForm = document.querySelector('.popup__send');

    order.forEach(function (item) {
        item.addEventListener('click', function () {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', function () {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        sendForm.style.display = 'flex';
    });

})();