export default (() => {
    const body = document.querySelector("body");
    const targetSection = document.querySelector(".js-contrast");
    const windowHeight = window.innerHeight;

    const r = 238;
    const g = 245;
    const b = 255;

    function map(num, in_min, in_max, out_min, out_max) {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
    }

    if (!targetSection) return;

    document.addEventListener("scroll", e => {
        let difference = targetSection.getBoundingClientRect().top - windowHeight;

        if (difference <= 0 && difference >= -Math.abs(windowHeight)) {
            let num = difference - -Math.abs(windowHeight);
            let rValue = Math.round(map(num, 0, windowHeight, r, 255));
            let gValue = Math.round(map(num, 0, windowHeight, g, 255));
            let bValue = Math.round(map(num, 0, windowHeight, b, 255));

            body.style.backgroundColor = `rgb(${rValue},${gValue},${bValue})`;
            targetSection.classList.add('js-contrast--shadowed')
        }
        if (window.scrollY == 0 || difference >= 0) {
            body.style.backgroundColor = 'rgb(255, 255, 255)';
            body.style.transition = 'background-color .3s linear';
            targetSection.classList.remove('js-contrast--shadowed')
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            body.style.backgroundColor = 'rgb(255, 255, 255)';
            body.style.transition = 'background-color .3s linear';
            targetSection.classList.remove('js-contrast--shadowed')
        }
    });
})();