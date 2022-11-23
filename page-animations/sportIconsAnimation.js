export function sportAnimation() {
    const icons = document.querySelector('.icon-container');
    const balls = document.querySelectorAll('.ball');
    const observer = new IntersectionObserver(function (entries, observer) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                icons.classList.add('active');
                balls.forEach(ball => ball.classList.add('active'));
            } else {
                icons.classList.remove('active');
                balls.forEach(ball => ball.classList.remove('active'));
            }
        })
    }, {});

    observer.observe(icons);

    balls.forEach((ball, index) => {
        ball.style.animationDelay = 300 * (index + 1) + 'ms';
    })

}