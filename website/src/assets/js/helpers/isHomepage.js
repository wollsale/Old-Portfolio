const isHomepage = () => {
    const body = document.body;
    if (body.classList.contains('homepage')) return true;
}

export default isHomepage();