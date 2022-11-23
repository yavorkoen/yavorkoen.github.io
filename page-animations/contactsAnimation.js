
export function contactsAnimation() {
    const contactsPage = document.querySelector('.contacts');
    const contacts = document.querySelector('.contacts-container');
    const options = {};

    const contactsObserver = new IntersectionObserver(function (entries, observer) {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contacts.style.transform = 'translateX(0) translateY(0) scale(1)';
            } else {
                contacts.style.transform = 'translateX(10%) translateY(10%) scale(0.8)';
            }
        })
    }, options);

    contactsObserver.observe(contactsPage);
}