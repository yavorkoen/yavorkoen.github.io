export function animateHeadings() {
    let headings = document.querySelectorAll('.heading');

    let options = {
        root: null,
        rootMargin: '10px 0px 10px 0px',
        threshold: 0
    }
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        })
    }, options);

    
    headings.forEach(heading => {
        observer.observe(heading);
    })
}
