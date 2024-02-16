function solve() {
    let inputsAndButton = Array.from(document.getElementById('container').children);
    let inputs = {
        name: inputsAndButton[0],
        hall: inputsAndButton[1],
        tPrice: inputsAndButton[2],
    }

    let sectionMovies = document.getElementById('movies');
    let moviesList = sectionMovies.children[1];

    let sectionArchive = document.getElementById('archive');
    let archiveList = sectionArchive.children[1];
    let clearBtn = sectionArchive.children[2];
    clearBtn.addEventListener('click', clear)

    let onScreenBtn = inputsAndButton[3];
    onScreenBtn.addEventListener('click', onScreen);

    function onScreen(event) {
        event.preventDefault();
      
        let name = inputs.name.value;
        let hall = inputs.hall.value;
        let tPrice = Number(inputs.tPrice.value);

        for (const [name, value] of Object.entries(inputs)) {
            if (value.value == '') {
                return;
            }
        }

        if (!tPrice && tPrice != 0) {
            return;
        }
        
        let newList = createList(name, hall, tPrice);
        moviesList.appendChild(newList);
        let fulfil = fulfillList(tPrice);
        newList.appendChild(fulfil);

        inputs.name.value = '';
        inputs.hall.value = '';
        inputs.tPrice.value = '';
    }

    function createList(name, hall) {
        let liEl = createElement('li');
    
        let spanEl = createElement('span', `${name}`);
        let strongLiEl = createElement('strong', `Hall: ${hall}`);
        liEl.appendChild(spanEl);
        liEl.appendChild(strongLiEl);
        return liEl;
    }
        
    function fulfillList(tPrice) {
        let divEl = createElement('div');
        let strongDivEl = createElement('strong', `${tPrice.toFixed(2)}`);
        let inputEl = createElement('input');
        inputEl.placeholder = `Tickets Sold`;
        let archiveBtn = createElement('button', `Archive`);
        divEl.appendChild(strongDivEl);
        divEl.appendChild(inputEl);
        divEl.appendChild(archiveBtn);

        archiveBtn.addEventListener('click', archive);
        return divEl;
    }

    function archive(event) {
        let currBtn = event.target;
        let divEl = currBtn.parentElement;
        let inputTickets = divEl.children[1].value;
    
        if (!Number(inputTickets) && inputTickets != `0`) {
            return;
        }

        let liEl = divEl.parentElement;
        let childrenOfLiEl = Array.from(liEl.children);

        let newLiEl = createElement('li');
        archiveList.appendChild(newLiEl);
        newLiEl.appendChild(childrenOfLiEl[0]);

        let strongDivEl = divEl.children[0];
        let ticketPrice = Number(strongDivEl.textContent);
        let total = inputTickets * ticketPrice;
        let newStrongEl = createElement('strong');
        newStrongEl.textContent = `Total amount: ${total.toFixed(2)}`;
        newLiEl.appendChild(newStrongEl);

        let deleteBtn = createElement('button', 'Delete');
        newLiEl.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', deleteEvent);
        liEl.remove();
    }

    function deleteEvent(event) {
        let currLiEl = event.target.parentElement;
        currLiEl.remove();
    }

    function clear() {
        archiveList.textContent = '';
    }

    function createElement(type, content) {
        let newEl = document.createElement(type);
        if (content) {
            newEl.textContent = content;
        }
        return newEl;
    }
}