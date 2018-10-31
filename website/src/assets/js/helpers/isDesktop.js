const isDesktop = (() => {
    if (document.documentElement.clientWidth >= 900) return true;
})();

export default isDesktop;