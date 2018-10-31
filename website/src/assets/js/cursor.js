const cursorHandling = () => {

    const myCursor = document.querySelector('.js-cursor')
    const myCursorCircle = document.querySelector('.js-cursor > circle')

    if (!myCursor) return

    const linksArray = document.querySelectorAll('a');

    for (let i = 0; i < linksArray.length; i++) {
        linksArray[i].addEventListener('mouseover', (e) => {
            myCursor.classList.add('js-cursor--is-hovering')
        })
        linksArray[i].addEventListener('mouseleave', (e) => {
            myCursor.classList.remove('js-cursor--is-hovering')
        })
    }

    document.addEventListener('mousemove', (e) => {
        let moveX = e.clientX - (myCursor.clientHeight / 2) + 1;
        let moveY = e.clientY - (myCursor.clientWidth / 2) + 1;

        myCursor.style.top = `${moveY}px`
        myCursor.style.left = `${moveX}px`
    })
}

cursorHandling();