import { html, render } from "./node_modules/lit-html/lit-html.js"

const url = 'http://localhost:3030/jsonstore/collections/books';

loadPage();

function loadPage() {
    const btnLoad = html`<button id="loadBooks" @click=${onLoadBooks}>LOAD ALL BOOKS</button>`
    renderer(btnLoad, document.body);
}

async function onLoadBooks() {
    try{
        const res = await fetch(url);
        const data = await res.json();

        render(content(data, 'add-form', onSubmitNewBook), document.body);

    } catch(err) {
        alert(err.message);
    }
}

function content(data, idForm, func) {
    return html`
    <button id="loadBooks" @click=${onLoadBooks}>LOAD ALL BOOKS</button>
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
    <form id=${idForm} @submit=${func}>
        ${showForm(idForm)}
    </form>
    `
}

function loadCurrBook(book) {
    return html`
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button @click=${onEdit}>Edit</button>
                    <button @click=${onDelete}>Delete</button>
                </td>
            </tr>
    `
}

async function onEdit() {
    
}

async function onDelete() {
    
}

function showForm(idForm) {
    if (idForm == 'add-form') {
        return html`
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
        `
    } 

    if (idForm == 'edit-form') {
        return html`
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
        `
    }
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

function renderer(data, root) {
    render(data, root);
}