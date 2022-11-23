export function imageAnimation() {

    const musicImages = document.querySelector('.music-images');
    const travelImages = document.querySelectorAll('.travel-image');

    let TravellingMediaObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.transform = `scale(1)`;
            } else {
                entry.target.style.transform = 'scale(0.5)';
            }
        })
    }, {
        threshold: 0.50
    });
    travelImages.forEach((image, index) => {
        TravellingMediaObserver.observe(image);
    })

    let musicImagesOptions = {
        threshold: thresholdGenerator()
    }

    let musicImagesObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.transform = `translateY(${entry.intersectionRatio*150}px)`
                }
            })
    }, musicImagesOptions)
    musicImagesObserver.observe(musicImages);
}

function thresholdGenerator() {
    let thresholds = [];
    for (let i = 0; i <= 1; i += 0.01) {
        thresholds.push(i.toFixed(2));
    }
    return thresholds;
}