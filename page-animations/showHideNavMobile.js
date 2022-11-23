export function showHideNavMobile() {

    const menuBtn = document.querySelector('.menu-button');
    const navigationMobile = document.querySelector('.navigation-mobile');
    const navLinkMobile = document.querySelectorAll('.navigation-mobile li');
    const burgerMenuLines = document.querySelectorAll('.burger-menu');
    
    menuBtn.addEventListener('click', (e) => {
        navigationMobile.classList.toggle('active');
        if (navigationMobile.classList.contains('active')) {
            burgerMenuLines[0].style.transform = 'translateY(2px) rotate(45deg)';
            burgerMenuLines[1].style.transform = 'translateY(-3px) rotate(-45deg)';
            navLinkMobile.forEach((link, index) => {
                link.style.animation = `navLinkFadeIn 0.5s ease ${index / 7}s forwards`;
            })
        } else {
            burgerMenuLines[0].style.transform = '';
            burgerMenuLines[1].style.transform = '';
            navLinkMobile.forEach((link, index) => {
                link.style.animation = `navLinkFadeOut ease ${index / 1.5}s forwards`;
            })
        }
    });
    window.addEventListener('scroll', () => {
        if (navigationMobile.classList.contains('active')) {
            navigationMobile.classList.remove('active');
            burgerMenuLines[0].style.transform = '';
            burgerMenuLines[1].style.transform = '';
            navLinkMobile.forEach((link, index) => {
                link.style.animation = `navLinkFadeOut ease ${index / 5}s forwards`;
            })
        }
    })
}