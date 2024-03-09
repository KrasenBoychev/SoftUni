import { endpoints, showSection } from "./app.js";
import { newElement } from "./createElement.js";

export async function details(event) {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
        return;
    }

    const liEl = event.target.parentElement
    const movieId = liEl.dataset.id;

    try {
        const response = await fetch(endpoints.movies + "/" + movieId);
        const data = await response.json();

        if (!response) {
            const err = response.json();
            alert(err.message);
        }

        liEl.removeChild(event.target);

        const pEl = newElement('p');
        pEl.textContent = data.description;
        liEl.appendChild(pEl);

        // const movieExampleSection = document.getElementById("movie-example");
        // movieExampleSection.querySelector('h1').textContent = `Movie title: ${data.title}`;
        // movieExampleSection.querySelector('img').src = data.img;
        // movieExampleSection.querySelector('p').textContent = data.description;

        const id = event.target.dataset.id;

        if (userData._ownerId == id) {
            // movieExampleSection.querySelector('.btn-danger').style.display = 'block';
            // movieExampleSection.querySelector('.btn-warning').style.display = 'block';
            // movieExampleSection.querySelector('.btn-primary').style.display = 'none';
            // movieExampleSection.querySelector('span').style.display = 'none';

        } else {
            // movieExampleSection.querySelector('.btn-danger').style.display = 'none';
            // movieExampleSection.querySelector('.btn-warning').style.display = 'none';
            // movieExampleSection.querySelector('.btn-primary').style.display = 'block';
            // movieExampleSection.querySelector('span').style.display = 'block';
        }

       // showSection("movie-example");

    } catch (err) {
        alert(err.message);
    }


}

function onDelete(params) {

}

function onEdit(params) {

}

function onLike(params) {

}

/*
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

    const btnDetails = newElement('button', "Details");
    divRow.appendChild(btnDetails);

    divColMdFour.style.display = 'none';
*/