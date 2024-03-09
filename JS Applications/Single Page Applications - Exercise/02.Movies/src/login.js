import { navElements, showSection } from "./app.js";
import { validate } from "./formValidation.js";

export function loginPage(event) {
    event?.preventDefault();
    showSection(["form-login"]);

    navElements.welcomeMsg.style.display = 'none';
    navElements.logout.style.display = 'none';
    navElements.login.style.display = 'block';
    navElements.register.style.display = 'block';

    const loginSection = document.getElementById('form-login');
    loginSection.querySelector('form').addEventListener('submit', validate);
}
