import { addMovieFunc } from "./addMovie.js";
import { endpoints, navElements, showSection } from "./app.js";
import { newElement } from "./createElement.js";

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

function showMovie({title, description, img}) {
    // const sectionEl = newElement('section');
    // sectionEl.id = "movie-example";
    // sectionEl.classList.add("view-section");
    // ulElement.appendChild(sectionEl);

    const divContainer = newElement('div');
    divContainer.classList.add("container");
    ulElement.appendChild(divContainer);

    const divRow = newElement('div');
    divRow.classList.add("row", "bg-light", "text-dark");
    divContainer.appendChild(divRow);

    const h1MovieTitle = newElement('h1', `Movie title: ${title}`);
    divRow.appendChild(h1MovieTitle);

    const divColMdEight = newElement('div');
    divColMdEight.classList.add("col-md-8");
    divRow.appendChild(divColMdEight);

    const imgEl = newElement('img');
    imgEl.classList.add("img-thumbnail");
    imgEl.src = `${img}`;
    imgEl.alt = "Movie";
    divColMdEight.appendChild(imgEl);

    const divColMdFour = newElement('div');
    divColMdFour.classList.add("col-md-4", "text-center")
    divRow.appendChild(divColMdFour);

    const h3El = newElement('h3', "Movie Description");
    h3El.classList.add("my-3");
    divColMdFour.appendChild(h3El);

    const pEl = newElement('p', description);
    divColMdFour.appendChild(pEl);

    const aDelete = newElement('a', "Delete");
    aDelete.classList.add("btn", "btn-danger");
    aDelete.href = "#";
    divColMdFour.appendChild(aDelete);

    const aEdit = newElement('a', "Edit");
    aEdit.classList.add("btn", "btn-warning");
    aEdit.href = "#";
    divColMdFour.appendChild(aEdit);

    const aLike = newElement('a', "Like");
    aLike.classList.add("btn", "btn-primary");
    aLike.href = "#";
    divColMdFour.appendChild(aLike);

    aDelete.addEventListener('click', onDelete);
    aEdit.addEventListener('click', onEdit);
    aLike.addEventListener('click', onLike);

    const spanEl = newElement('span', `Liked 1`);
    spanEl.classList.add("enrolled-span");
    divColMdFour.appendChild(spanEl);
}

function onDelete(params) {
    
}

function onEdit(params) {
    
}

function onLike(params) {
    
}
