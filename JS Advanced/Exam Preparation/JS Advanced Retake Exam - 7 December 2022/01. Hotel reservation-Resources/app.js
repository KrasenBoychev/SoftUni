window.addEventListener('load', solve);

function solve() {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let dateIn = document.getElementById("date-in");
    let dateOut = document.getElementById("date-out");
    let peopleCount = document.getElementById("people-count");
    let formInputFields = Array.from(document.querySelectorAll("form input"));
    let nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener(`click`, next);

    function next(event) {
        event.preventDefault();
        for (const inputField of formInputFields) {
            if (!inputField.value) {
                return;
            }
        }

        if (dateIn.value >= dateOut.value) {
            return;
        }

        let ulElement = document.getElementsByClassName("info-list")[0];
        let liElement = document.createElement("li");
        liElement.classList.add("reservation-content");
        ulElement.appendChild(liElement);

        liElement.innerHTML =
            `<article>
            <h3>Name: ${firstName.value} ${lastName.value}</h3>
         <p>From date: ${dateIn.value}</p>
         <p>To date: ${dateOut.value}</p>
         <p>For: ${peopleCount.value} people</p>
         </article>
         <button class="edit-btn">Edit</button>
         <button class="continue-btn">Continue</button>`

        for (const inputField of formInputFields) {
            inputField.value = ``;
        }

        event.disabled = true;

        let editBtn = document.getElementsByClassName("edit-btn")[0];
        editBtn.addEventListener(`click`, edit);

        let continueBtn = document.getElementsByClassName("continue-btn")[0];
        continueBtn.addEventListener(`click`, continueFunc);
    }

    function edit(event) {
        let articleElements = Array.from(event.target.parentElement.children[0].children);
        let [name, first, last] = articleElements[0].textContent.split(" ");
        firstName.value = first;
        lastName.value = last;

        let [from, dIn, editDateIn] = articleElements[1].textContent.split(" ");
        dateIn.value = editDateIn;

        let [to, dOut, editDateOut] = articleElements[2].textContent.split(" ");
        dateOut.value = editDateOut;

        let [forPeople, people] = articleElements[3].textContent.split(" ");
        peopleCount.value = people;

        event.target.parentElement.remove();
        nextBtn.disabled = false;
    }

    function continueFunc(event) {
        let ulConfirm = document.getElementsByClassName("confirm-list")[0];
        let liConfirm = document.createElement("li");
        liConfirm.classList.add("confirm-list");
        ulConfirm.appendChild(liConfirm);

        let articleReservation = event.target.parentElement.children[0];
        liConfirm.appendChild(articleReservation);

        liConfirm.innerHTML += `
        <button class="confirm-btn">Confirm</button>
         <button class="cancel-btn">Cancel</button>`

        event.target.parentElement.remove();

        let confirmBtn = document.getElementsByClassName("confirm-btn")[0];
        confirmBtn.addEventListener(`click`, confirm);

        let cancelBtn = document.getElementsByClassName("cancel-btn")[0];
        cancelBtn.addEventListener(`click`, cancel);
    }

    function confirm(event) {
        event.target.parentElement.remove();
        nextBtn.disabled = false;

        let reservationField = document.getElementById("verification");
        reservationField.classList.add("reservation-confirmed");
        reservationField.textContent = "Confirmed.";
    }

    function cancel(event) {
        event.target.parentElement.remove();
        nextBtn.disabled = false;

        let reservationField = document.getElementById("verification");
        reservationField.classList.add("reservation-cancelled");
        reservationField.textContent = "Cancelled.";
    }
}





