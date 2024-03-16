import { html, render } from "./node_modules/lit-html/lit-html.js"

const url = 'http://localhost:3030/jsonstore/collections/books';

const divTable = document.getElementById('table');
const divForm = document.getElementById('form');

let currBookId = null;

document.getElementById('loadBooks').addEventListener('click', clickLoad);

function clickLoad() {
    onLoadBooks();
    render(showAddForm(), divForm);
}

async function onLoadBooks() {
    try{
        const res = await fetch(url);
        const data = await res.json();

        render(content(data), divTable);

    } catch(err) {
        alert(err.message);
    }
}

function content(data) {
    return html`
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${Object.values(data).map(book => loadCurrBook(book))}
        </tbody>
    </table>
    `
}

function loadCurrBook(book) {
    return html`
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td data-id=${book._id}>
                    <button @click=${onEdit}>Edit</button>
                    <button @click=${onDelete}>Delete</button>
                </td>
            </tr>
    `
}

function showAddForm() {
    return html`
     <form id="add-form" @submit=${onSubmitNewBook}>
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
    </form>
    `
}

function showEditForm() {
    return html`
     <form id="edit-form" @submit=${saveBookChanges}>
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
    `
}

async function onSubmitNewBook(event) {
event.preventDefault();

const formData = new FormData(event.target);
const data = Object.fromEntries(formData.entries());

if (!data.author || !data.title) {
    alert('All fields are required!')
    return;
}

await fetch(url, {
    method: "post",
    headers: {
        "Content-type": "application.json"
    },
    body: JSON.stringify({"author": data.author, "title": data.title})
});

event.target.reset();
onLoadBooks();
}


async function onEdit(event) {
    event.preventDefault();
    render(showEditForm(), divForm);

    const bookId = event.target.parentElement.dataset.id;
    const res = await fetch(url + "/" + bookId);
    const bookData = await res.json();

    const editForm = document.getElementById('edit-form');
    editForm.querySelector('input[name="title"]').value = bookData.title;
    editForm.querySelector('input[name="author"]').value = bookData.author;

    currBookId = bookId;
}

async function onDelete(event) {
    event.preventDefault();

    const bookId = event.target.parentElement.dataset.id;

    await fetch(url + "/" + bookId, {
        method: "delete"
    });

    onLoadBooks();
}

async function saveBookChanges(event) {
    event.preventDefault();
    
    const newTitle = event.target.querySelector('input[name="title"]').value;
    const newAuthor = event.target.querySelector('input[name="author"]').value;

    if (!newTitle || !newAuthor) {
        alert('All fields are required');
        return;
    }

    await fetch(url + "/" + currBookId, {
        method: "put",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({"author": newAuthor, "title": newTitle, "_id": currBookId})
    })

    onLoadBooks();
    event.target.reset();
}

