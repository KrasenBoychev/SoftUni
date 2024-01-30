function addItem() {
    let userInput = document.getElementById('newItemText').value;
    let liElement = document.createElement("li");
    liElement.textContent = userInput;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', onDelete);
    liElement.appendChild(deleteBtn);

    document.getElementById('items').appendChild(liElement);
    document.getElementById('newItemText').value = '';

    function onDelete(event) {
        let liElement = event.target.parentElement;
        liElement.remove();
    }
}