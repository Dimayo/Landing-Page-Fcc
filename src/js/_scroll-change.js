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