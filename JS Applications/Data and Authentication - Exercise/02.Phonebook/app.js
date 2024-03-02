function attachEvents() {
    const phonebook = document.getElementById('phonebook');
    document.getElementById('btnLoad').addEventListener('click', load);
    document.getElementById('btnCreate').addEventListener('click', onCreate);

    const url = 'http://localhost:3030/jsonstore/phonebook';


    async function load(e) {
        try {
            const response = await fetch(url);
            const data = await response.json();

            phonebook.innerHTML = "";
            for (const personInfo of Object.values(data)) {
                newContact(personInfo);
            }

        } catch (err) {
            alert(err.message);
        }

    }

    function newContact(personInfo) {
        const newEl = document.createElement('li');
        newEl.textContent = `${personInfo.person}: ${personInfo.phone}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.id = personInfo._id;
        deleteBtn.addEventListener('click', deletePerson);

        newEl.appendChild(deleteBtn);
        phonebook.appendChild(newEl);
    }

    async function deletePerson(e) {
        let id = e.target.dataset.id;
        await fetch(url + "/" + id, {method: "DELETE"});
        load();
    }

    async function onCreate(e) {
        const personRef = document.getElementById('person');
        const phoneRef = document.getElementById('phone');

        const person = personRef.value;
        const phone = phoneRef.value;

        if (!person || !phone) {
            return;
        }

        const data = {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({person, phone})
        }

        await fetch(url, data);

        personRef.value = "";
        phoneRef.value = "";

        load();
    }
}

attachEvents();