import { endpoints, showSection } from "./app.js";

export function addMovieFunc(event) {
    event.preventDefault();
    showSection("add-movie");

    const addMovieSection = document.getElementById('add-movie');
    addMovieSection.querySelector('form').addEventListener('submit', submitMovie);
}

async function submitMovie(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    data.title = data.title.trim();
    data.description  = data.description.trim();
    data.image  = data.image.trim();

    if (!data.title || !data.description || data.image) {
        alert('The input fields must be filled!');
        return;
    }

    try {
        const response = await fetch(endpoints.movies, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response) {
            const err = response.json();
            alert(err.message);
        }

    } catch (err) {
        alert(err.message);
        return;
    }

    event.target.reset();

    homePage();
}