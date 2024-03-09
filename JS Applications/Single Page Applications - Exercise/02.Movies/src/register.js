import { navElements, showSection } from "./app.js";
import { validate } from "./formValidation.js";

export function registerPage(event) {
    event.preventDefault();
    showSection(["form-sign-up"]);

    navElements.welcomeMsg.style.display = 'none';
    navElements.logout.style.display = 'none';

    const registerSection = document.getElementById('form-sign-up');
    registerSection.querySelector('form').addEventListener('submit', validate);
}
