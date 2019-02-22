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