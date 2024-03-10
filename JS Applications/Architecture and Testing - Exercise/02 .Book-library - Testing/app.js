const url = 'http://localhost:3030/jsonstore/collections/books';

const tableBody = document.querySelector('tbody');

const titleRef = document.querySelector('input[name="title"]');
const authorRef = document.querySelector('input[name="author"]');

const formRef = document.querySelector('form');
const h3Ref = formRef.querySelector('h3');
const btnRef = formRef.querySelector('button');

let currId = null;

document.getElementById('loadBooks').addEventListener('click', loadBooks);

formRef.addEventListener('submit', createBook);

loadBooks();
async function loadBooks(e) {
    try {
        const res = await fetch(url);
        const data = await res.json();

        tableBody.replaceChildren();

        for (const book of Object.values(data)) {
            appendBook(book);
        }

    } catch (err) {
        alert(err.message);
    }
}

function appendBook(book) {
    const tableRow = document.createElement('tr');

    const tdBook = document.createElement('td');
    const tdAuthor = document.createElement('td');
    const tdBtns = document.createElement('td');

    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    tdBook.textContent = book.title;
    tdAuthor.textContent = book.author;

    editBtn.textContent = 'Edit';
    editBtn.dataset.id = book._id;
    editBtn.addEventListener('click', onEdit);

    deleteBtn.textContent = 'Delete';
    deleteBtn.dataset.id = book._id;
    deleteBtn.addEventListener('click', onDelete);

    tableBody.appendChild(tableRow);

    tableRow.appendChild(tdBook);
    tableRow.appendChild(tdAuthor);
    tableRow.appendChild(tdBtns);

    tdBtns.appendChild(editBtn);
    tdBtns.appendChild(deleteBtn);
}

async function onEdit(e) {
    const id = e.target.dataset.id;

    let titleElement = e.target.parentElement.parentElement.querySelector('td');
    let authorElement = e.target.parentElement.parentElement.querySelectorAll('td')[1];
    titleRef.value = titleElement.textContent;
    authorRef.value = authorElement.textContent;

    try {
        const res = await fetch(url + "/" + id);
        const data = await res.json();

        h3Ref.textContent = 'Edit FORM';
        btnRef.textContent = 'Save';
        
        formRef.removeEventListener('submit', createBook);
        formRef.addEventListener('submit', onSave);

        currId = data._id;
    } catch (err) {
        alert(err.message);
    }
}

async function onSave(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.author || !data.title) {
        return;
    }

    const bodyInfo = {
        author: data.author.trim(),
        title: data.title.trim(),
        _id: currId
    };

    const res = await fetch (url + "/" + currId, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(bodyInfo)
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
    }

    titleRef.value = "";
    authorRef.value = "";

    h3Ref.textContent = 'FORM';
    btnRef.textContent = 'Submit';

    formRef.removeEventListener('submit', onSave);
    formRef.addEventListener('submit', createBook);

    loadBooks();
}

async function onDelete(e) {
    const id = e.target.dataset.id;
    await fetch (url + "/" + id, {method: "DELETE"});
    loadBooks();
}

async function createBook(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.author || !data.title) {
        return;
    }

    const bodyInfo = {
        author: data.author.trim(),
        title: data.title.trim()
    };

    const res = await fetch (url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(bodyInfo)
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
    }

    titleRef.value = "";
    authorRef.value = "";

    loadBooks();
}