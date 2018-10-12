export default (() => {
    const body = document.querySelector("body");
    const targetSection = document.querySelector(".js-contrast");
    const windowHeight = window.innerHeight;

    if (!targetSection) return;

    function map(num, in_min, in_max, out_min, out_max) {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }

    document.addEventListener("scroll", e => {
        let difference = targetSection.getBoundingClientRect().top - windowHeight;

        if (difference <= 0 && difference >= -Math.abs(windowHeight)) {
            let num = difference - -Math.abs(windowHeight);
            let value = Math.round(map(num, 0, windowHeight, 20, 255));

            body.style.backgroundColor = `rgb(${value},${value},${value})`;
        }

        if (window.scrollY == 0 || difference >= 0) {
            body.style.backgroundColor = 'rgb(255, 255, 255)';
            body.style.transition = 'color .3s linear';
        }
    });
})();