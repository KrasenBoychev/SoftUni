function deleteByEmail() {
    let userInput = document.querySelector('[name="email"]').value;
    let rows = document.querySelectorAll('tbody tr');
    let result = document.getElementById('result');
    result.textContent = 'Not found.';

    for (let row of rows) {
        if (row.children[1].textContent == userInput) {
            row.remove();
            result.textContent = 'Deleted.';
        }
    }
}