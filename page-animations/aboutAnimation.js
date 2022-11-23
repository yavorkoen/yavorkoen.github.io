
export const aboutAnimation = function () {
    const aboutPage = document.querySelector('.about');
    const aboutText = document.querySelector('.about-text');
    const options = {
        root: null,
        threshold: 0.2
    };

    const aboutObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.transform = 'scale(100%)';
                aboutText.style.opacity = '1';
                aboutText.style.transform = 'translateX(0%)';
            } else {
                entry.target.style.transform = 'scale(70%)';
                aboutText.style.opacity = '0';
                aboutText.style.transform = 'translateX(-100%)'
            }  
        })
    }, options);
    aboutObserver.observe(aboutPage);
}



