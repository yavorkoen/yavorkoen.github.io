export function mailCopyToClipboard () {
    const emails = document.querySelectorAll('.email p');
    let [email, clipboardPopup] = [...Array.from(emails)];
    email.addEventListener('click', () => {
        navigator.clipboard.writeText('yavorkoen@gmail.com');
        clipboardPopup.innerHTML = 'Email is copied! <i class="fas fa-solid fa-envelope-open-text"></i>'
    });
}