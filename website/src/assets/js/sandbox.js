/* map(num, in_min, in_max, out_min, out_max) */
import map from './helpers/map';

export default (() => {

    const body = document.querySelector('body');
    const sections = document.querySelectorAll('.js-contrast');
    const windowHeight = window.innerHeight;

    // map()
    const r = 238;
    const g = 245;
    const b = 255;

    // in()
    function backgroundColorIn(section) {
        let difference = windowHeight - section.top;

        let rEvolutiveValue = Math.round(map(difference, 0, windowHeight, 255, r));
        let gEvolutiveValue = Math.round(map(difference, 0, windowHeight, 255, g));
        let bEvolutiveValue = Math.round(map(difference, 0, windowHeight, 255, b));

        body.style.backgroundColor = `rgb(${rEvolutiveValue}, ${gEvolutiveValue}, ${bEvolutiveValue})`
    }
    // out()
    function backgroundColorOut(section) {
        let difference = windowHeight - section.bottom

        let rEvolutiveValue = Math.round(map(difference, 0, 250, r, 255));
        let gEvolutiveValue = Math.round(map(difference, 0, 250, g, 255));
        let bEvolutiveValue = Math.round(map(difference, 0, 250, b, 255));

        body.style.backgroundColor = `rgb(${rEvolutiveValue}, ${gEvolutiveValue}, ${bEvolutiveValue})`
    }

    // ForEach
    sections.forEach((section) => {
        document.addEventListener('scroll', () => {
            section.top = section.getBoundingClientRect().top;
            section.bottom = section.getBoundingClientRect().bottom;

            const showIn = section.top <= windowHeight && section.top >= 0;
            const showOut = section.bottom <= windowHeight && section.bottom >= windowHeight - 250;

            if (showIn) {
                backgroundColorIn(section);
            }
            if (showOut) {
                backgroundColorOut(section)
            }
        })
    })


})();