// import isHomepage from './helpers/isHomepage'
// import isDesktop from './helpers/isDesktop'

const homepageHeaderHeight = (() => {
    const isHomepage = () => {
        const body = document.body;
        if (body.classList.contains('homepage')) return true;
    }

    const isDesktop = () => {
        if (document.documentElement.clientWidth >= 900) return true;
    }

    const headerHeight = () => {
        const windowHeight = window.innerHeight;
        const body = document.body;

        body.style.height = windowHeight + "px";
    }

    window.addEventListener('resize', () => {
        console.log('resizing...')
        if (isHomepage() && !isDesktop()) headerHeight();
    })

    if (isHomepage() && !isDesktop()) headerHeight();
})();