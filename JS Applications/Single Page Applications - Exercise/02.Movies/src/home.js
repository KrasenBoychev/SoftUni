import { addMovieFunc } from "./addMovie.js";
import { endpoints, navElements, showSection } from "./app.js";
import { newElement } from "./createElement.js";
import { details } from "./movieDetails.js";

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

    showAllMovies();
}

const ulElement = document.getElementById('movies-list');

async function showAllMovies() {

    try {
        const response = await fetch(endpoints.movies);
        const data = await response.json();

        if (!response) {
            const err = response.json();
            alert(err.message);
        }
        
        ulElement.textContent = '';

        for (const movie of data) {
            showMovie(movie);
        }

    } catch (err) {
        alert(err.message);
        return;
    }
}

function showMovie({_id, title, img, _ownerId}) {

    const liEl = newElement('li');
    liEl.dataset.id = _id;
    ulElement.appendChild(liEl);

    const imgEl = newElement('img');
    imgEl.classList.add("img-thumbnail");
    imgEl.src = `${img}`;
    imgEl.alt = "Movie";
    liEl.appendChild(imgEl);

    const h1MovieTitle = newElement('h1', `Movie title: ${title}`);
    liEl.appendChild(h1MovieTitle);

    const btnDetails = newElement('button', "Details");
    btnDetails.dataset.id = _ownerId;
    liEl.appendChild(btnDetails);

    btnDetails.addEventListener('click', details);
}


