//Smooth scrolling
(function smoothScrolling() {

    const navLinks = document.querySelectorAll('.nav-link');
    for (let n in navLinks) {
        if (navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.nav-links').classList.remove('show');
                document.getElementById('burger-menu').checked = false;
                document.querySelector(navLinks[n].hash).scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            });
        }
    }
})();

//Toggle Menu
(function menuToggle() {
   
    document.querySelector('.burger-menu').addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        if (!nav.classList.contains('show')) {
            nav.classList.add('show');
        } else {
            nav.classList.remove('show');
        }
    });
})();

//Scroll change
(function scrollChange() {
   
    const parts = document.querySelectorAll('.part');

    window.onscroll = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        scrollPos += window.innerHeight / 2;

        for (let s in parts) {
            if (parts.hasOwnProperty(s) && parts[s].offsetTop <= scrollPos) {
                const id = parts[s].id;
                document.querySelector('.active').classList.remove('active');
                document.querySelector(`a[href*=${id}]`).classList.add('active');
            }
        }
    };
})();

//Email send
(function emailSend() {
   
    let emailForm = document.querySelector('#form'),
        sendEmailForm = document.querySelector('.send-email'),
        submit = document.querySelector('#submit'),
        email = document.querySelector('#email');

    emailForm.addEventListener('submit', function (event) {
        event.preventDefault();
        sendEmailForm.style.display = 'flex';
        submit.style = 'pointer-events: none';
        email.style = 'pointer-events: none';
    });
})();

//Modal
(function modalWindow() {
   
    let order = document.querySelectorAll('.menu-order'),
        overlay = document.querySelector('.overlay'),
        closeModal = document.querySelector('.popup-close'),
        form = document.querySelector('.main-form'),
        sendForm = document.querySelector('.send-form');

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