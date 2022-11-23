export function educationAnimation() {
    const animatedItems = document.querySelectorAll('.animated-line');
    const educationPage = document.querySelector('.education');


    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');

            }
        });
    }, {})
    animatedItems.forEach(x => {
        observer.observe(x)
    })


    const pageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let backgroundColor = window.getComputedStyle(entry.target, null).getPropertyValue('background-color');
                let colorValues = backgroundColor.match(/\d+/g);
                let [red, green, blue] = [...colorValues]
                entry.target.style.backgroundColor = `rgb(
                    ${entry.intersectionRatio * 10}, 
                    ${ entry.intersectionRatio * 10}
                    ${entry.intersectionRatio * 10}
                    )`;
            }
        });
    }, {
        threshold: thresholdGenerator()
    })
    pageObserver.observe(educationPage)

}

function thresholdGenerator() {
    let thresholds = [];
    for (let i = 0; i <= 1; i += 0.01) {
        thresholds.push(i.toFixed(2));
    }
    return thresholds;
}
