export function changeHeaderBackground() {

    const header = document.querySelector('header');
    const articles = document.querySelectorAll('article');
    const burgerMenuLines = document.querySelectorAll('.burger-menu');
    
    const options = {
        root: null,
        rootMargin: '-10% 0% -90% 0%',
        threshold: 0
    };
    
    const observer = new IntersectionObserver(function (entries, observer) {
    
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                let backgroundColor = window.getComputedStyle(entry.target ,null).getPropertyValue('background');
                let color = window.getComputedStyle(entry.target ,null).getPropertyValue('color');
                header.style.background = backgroundColor;
                header.style.color = color;
                burgerMenuLines.forEach(l => l.style.background = color);
                
            }
        })
    }, options);

    articles.forEach(article => {
        observer.observe(article);
    })
}




