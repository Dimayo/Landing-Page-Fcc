(function menuToggle() {

    document.querySelector('.burger-menu__input').addEventListener('click', () => {
        const nav = document.querySelector('.navbar__links');
        if (!nav.classList.contains('show')) {
            nav.classList.add('show');
        } else {
            nav.classList.remove('show');
        }
    });
})();