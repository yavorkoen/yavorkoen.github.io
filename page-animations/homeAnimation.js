export const homeAnimation = function () {
    const letters = document.querySelectorAll('.home span');
    const home = document.querySelector('.home');
    let intervalId = null;
    let options = {
        threshold: 0.7
    }

    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                intervalId = setInterval(changeLetters, 200);
            } else {
                clearInterval(intervalId);
                intervalId = null;
                letters.forEach(l => {
                            l.style.transform = 'scale(1)';
                        })
            }
            function changeLetters() {
                for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
                    if (i < 9) {
                        letters[i].style.transform = 'scale(1.1)';
                        if(i == 3 || i == 6) {
                            letters[i].style.transform = 'scale(1.1) rotate(180deg)';
                        }
                    }
                }
                for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
                    if (i < 9) {
                        letters[i].style.transform = 'scale(0.7)';
                    }
                }
            }
        });
    }, options);

    observer.observe(home);
}