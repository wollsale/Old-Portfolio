export const lazyLoading = (() => {
    const pictures = document.querySelectorAll('picture');
    const imgs = document.querySelectorAll('img');

    console.log('running...');

    pictures.forEach(picture => {
        [].forEach.call(picture.querySelectorAll('source, img'), (source) => {
            if (source.dataset.srcset) {
                source.srcset = source.dataset.srcset
                source.removeAttribute("data-srcset")
            }
            if (source.dataset.src) {
                source.src = source.dataset.src
                source.removeAttribute("data-src")
            }
        });
    })
    imgs.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src
            img.removeAttribute("data-src")

            img.onload = function () {
                console.log('image loaded');
            }
        }
    })
})();