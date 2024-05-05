import { page } from "../lib.js";

function leavePage() {
    const navLinks = document.querySelector('nav').querySelectorAll('a');
    for (const link of navLinks) {
        link.addEventListener('click', showMessage);
    }
} 

function showMessage(e) {
    e.preventDefault();

    const choice = confirm('Are you sure you want to leave the page?');
    if (choice) {
        let anchor = e.target;

        if (e.target.tagName != 'A') {
            anchor = e.target.parentElement;
        } 

        page.redirect(`${anchor.pathname}`);

        const navLinks = document.querySelector('nav').querySelectorAll('a');
        for (const link of navLinks) {
            link.removeEventListener('click', showMessage);
        }
    }
}

export { leavePage };