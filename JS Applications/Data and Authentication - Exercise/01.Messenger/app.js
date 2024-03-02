function attachEvents() {
    const textarea = document.getElementById('messages');
    const nameBox = document.querySelector('input[name="author"]');
    const contentBox = document.querySelector('input[name="content"]');

    const sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', submit);

    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', refresh);

    const url = ' http://localhost:3030/jsonstore/messenger';

    async function submit() {
        const name = nameBox.value;
        const message = contentBox.value;

        const data = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({author: name, content: message}),
        };

        const res = await fetch(url, data);
    }

    async function refresh() {
        textarea.value = "";

        const response = await fetch(url);
        const data = await response.json();

        Object.values(data).forEach(rec => {
            textarea.value += `${rec.author}: ${rec.content}\n`
        });

        textarea.value = textarea.value.trim();
    }
}

attachEvents();