(function smoothScrolling() {

    const navLinks = document.querySelectorAll('.navbar__link');
    for (let n in navLinks) {
        if (navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector('.navbar__links').classList.remove('show');
                document.querySelector('.burger-menu__input').checked = false;
                document.querySelector(navLinks[n].hash).scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });
            });
        }
    }
})();