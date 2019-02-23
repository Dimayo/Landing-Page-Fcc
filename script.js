//Smooth scrolling

(function smoothScrolling() {
    "use strict";
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
    "use strict";
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
    "use strict";
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

//Modal

(function modalWindow() {
    "use strict";

    let order = document.querySelectorAll('.menu-order'),
        overlay = document.querySelector('.overlay'),
        closeModal = document.querySelector('.popup-close');

    for (let i = 0; i <= order.length; i++) {
        order[i].addEventListener('click', function () {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        closeModal.addEventListener('click', function () {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
})();