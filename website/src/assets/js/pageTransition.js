import isDesktop from './helpers/isDesktop';

export const pageTransition = (() => {
    const body = document.body;
    const transitionClass = 'js-pageInTransition';
    const links = document.querySelectorAll('a[data-transition]');

    if (!isDesktop) return;

    for (let i = 0; i < links.length; i++) {
        const el = links[i];
        const url = el.href;

        el.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            body.classList.contains(transitionClass) ? body.classList.remove(transitionClass) : body.classList.add(transitionClass);

            setTimeout(() => {
                location.href = url;
            }, 1300)
        })
    }
})();