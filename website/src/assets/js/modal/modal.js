import isDesktop from '../helpers/isDesktop';

const modal = (() => {
    const modals = document.querySelectorAll('.js-modal')
    const triggers = document.querySelectorAll('.js-modalTrigger')
    const closes = document.querySelectorAll('.js-modalClose')
    const cursor = document.querySelector('.js-cursor')
    const body = document.body
    const openClass = "js-modal--is-open"
    const noScrollClass = "js-no-scroll"
    const closeCursor = "js-cursor--is-close"

    for (let i = 0; i < triggers.length; i++) {
        const trigger = triggers[i]

        trigger.addEventListener('click', (e) => {
            e.preventDefault()
            const target = trigger.dataset.target

            for (let i = 0; i < modals.length; i++) {
                const modal = modals[i];
                const id = modal.dataset.id

                // Get height
                modal.style.height = window.innerHeight + "px";

                if (target == id) modal.classList.add(openClass), body.classList.add(noScrollClass), cursor.classList.add(closeCursor), modal.querySelector('.about__content').scrollTo(0, 0);

                if (isDesktop) {
                    if (modal.classList.contains(openClass)) modal.addEventListener('click', (e) => {
                        modal.classList.remove(openClass)
                        cursor.classList.remove(closeCursor)
                        body.classList.remove(noScrollClass)
                    })
                }
            }

            for (let i = 0; i < closes.length; i++) {
                const close = closes[i];
                close.addEventListener('click', (e) => {
                    e.preventDefault()

                    for (let i = 0; i < modals.length; i++) {
                        const modal = modals[i];
                        if (modal.classList.contains(openClass)) modal.classList.remove(openClass), body.classList.remove(noScrollClass), cursor.classList.remove(closeCursor);
                    }
                })
            }
        })
    }
})();