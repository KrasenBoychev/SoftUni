import { addMovieFunc } from "./addMovie.js";
import { navElements, showSection } from "./app.js";

export function homePage(event) {
    event?.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
        showSection(["home-page", "add-movie-button", "movie"]);

        navElements.welcomeMsg.textContent = `Welcome, ${userData.email}`;
        navElements.welcomeMsg.style.display = 'block';
        navElements.logout.style.display = 'block';
        navElements.login.style.display = 'none';
        navElements.register.style.display = 'none';

        const addMovieBtn = document.getElementById('add-movie-button');
        addMovieBtn.querySelector('a').addEventListener('click', addMovieFunc);

    } else {
        showSection(["home-page", "movie"]);
        navElements.welcomeMsg.style.display = 'none';
        navElements.logout.style.display = 'none';
        navElements.login.style.display = 'block';
        navElements.register.style.display = 'block';
    }
}