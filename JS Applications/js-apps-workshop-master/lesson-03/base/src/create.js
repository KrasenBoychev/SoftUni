window.addEventListener('load', start);

function start() {
    document.querySelector('form').addEventListener('submit', onCreate);

    const userData = localStorage.getItem('user');

    if (!userData) {
        window.location = '/login.html';
        return;
    }
}

async function onCreate(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const body = {
        "name": data.name.trim(),
        "img": data.img.trim(),
        "ingredients": parseMultiline(data.ingredients),
        "steps": parseMultiline(data.steps)
    };

    try {
        const url = 'http://localhost:3030/data/recipes';

        const userData = JSON.parse(localStorage.getItem('user'));

        if (!userData) {
            throw new Error('You must be logged in to post recipes!')
        }

        const res = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': userData.accessToken
            },
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message);
        }

        window.location = '/';

    } catch (err) {
        alert(err.message);
    }
}

function parseMultiline(data) {
    return data
        .split('\n')
        .map(r => r.trim())
        .filter(r => r);
}