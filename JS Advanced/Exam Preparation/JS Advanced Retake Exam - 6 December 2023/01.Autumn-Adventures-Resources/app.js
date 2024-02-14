window.addEventListener('load', solve);

function solve() {
    let inputs = {
        time: document.getElementById(`time`),
        date: document.getElementById(`date`),
        place: document.getElementById(`place`),
        eventName: document.getElementById(`event-name`),
        contacts: document.getElementById(`email`)
    }

    let lastCheck = document.getElementById(`check-list`);
    let upcoming = document.getElementById(`upcoming-list`);
    let finished = document.getElementById(`finished-list`);

    let addBtn = document.getElementById(`add-btn`);
    addBtn.addEventListener('click', addEvent);

    let clearBtn = document.getElementById(`clear`);
    clearBtn.addEventListener('click', clear);

    function addEvent() {
        for (let [name, field] of Object.entries(inputs)) {
            if (field.value == ``) {
                return;
            }
        }

        let time = inputs.time.value;
        let date = inputs.date.value;
        let place = inputs.place.value;
        let eventName = inputs.eventName.value;
        let contacts = inputs.contacts.value;

        let createliEl = createList(time, date, place, eventName, contacts);
        lastCheck.appendChild(createliEl);

        let editBtn = createEl('button', 'Edit');
        editBtn.className = 'edit-btn';
        let continueBtn = createEl('button', 'Continue');
        continueBtn.className = 'continue-btn';

        createliEl.appendChild(editBtn);
        createliEl.appendChild(continueBtn);

        editBtn.addEventListener('click', () => editClick(time, date, place, eventName, contacts));
        continueBtn.addEventListener('click', () => continueClick(time, date, place, eventName, contacts));

        addBtn.parentElement.reset();
        addBtn.disabled = true;
    }

    function editClick(time, date, place, eventName, contacts) {
        inputs.time.value = time;
        inputs.date.value = date;
        inputs.place.value = place;
        inputs.eventName.value = eventName;
        inputs.contacts.value = contacts;

        lastCheck.textContent = '';
        addBtn.disabled = false;
    }

    function continueClick(time, date, place, eventName, contacts) {
        let createliEl = createList(time, date, place, eventName, contacts);
        upcoming.appendChild(createliEl);
        
        let moveBtn = createEl('button', 'Move to Finished');
        moveBtn.className = 'finished-btn';

        createliEl.appendChild(moveBtn);

        moveBtn.addEventListener('click', () => move(time, date, place, eventName, contacts));
        
        lastCheck.textContent = '';
        addBtn.disabled = false;
    }

    function move(time, date, place, eventName, contacts) {
        let createLiEl = createList(time, date, place, eventName, contacts);
        finished.appendChild(createLiEl);

        upcoming.textContent = '';
    }

    function clear() {
        finished.textContent = '';
    }

    function createList(time, date, place, eventName, contacts) {
        let liEl = createEl('li');
        liEl.className = 'event-content';
        let articleEl = createEl('article');
        liEl.appendChild(articleEl);

        let pBegins = createEl('p', `Begins: ${date} at: ${time}`);
        let pIn = createEl('p', `In: ${place}`);
        let pEvent = createEl('p', `Event: ${eventName}`);
        let pContacts = createEl('p', `Contact: ${contacts}`);

        articleEl.appendChild(pBegins);
        articleEl.appendChild(pIn);
        articleEl.appendChild(pEvent);
        articleEl.appendChild(pContacts);

        return liEl;
    }

    function createEl(type, content) {
        let newElement = document.createElement(type);

        if (content) {
            newElement.textContent = content;
        }
        return newElement;
    }
}




