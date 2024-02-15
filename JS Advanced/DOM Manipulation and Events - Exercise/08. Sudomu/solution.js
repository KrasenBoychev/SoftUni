function solve() {
    let table = document.querySelector('table');
    let messageField = document.getElementById('check');
    let messageParagraph = messageField.children[0];

    let buttons = document.querySelectorAll('button');
    let checkBtn = buttons[0];
    checkBtn.addEventListener('click', check);

    let clearBtn = buttons[1];
    clearBtn.addEventListener('click', clear);

    function check() {
        let rows = document.querySelectorAll('tbody tr');
        
        for (const row of rows) {
            let tableData = Array.from(row.children);
            let inputs = tableData.map(el => Number(el.children[0].value));

            if (isValid(inputs) == 'not finished') {
                return;
            }
        }

        for (let i = 0; i <= 2; i++) {
            let columnValues = [];
            
            for (const row of rows) {
                let input = row.children[i].children[0];
                columnValues.push(Number(input.value));
            }

            if (isValid(columnValues) == 'not finished') {
                return;
            }
        }

        table.style.border = "2px solid green";
        messageParagraph.textContent = 'You solve it! Congratulations!';
        messageParagraph.style.color = "green";
    }

    function clear() {
        let inputs = document.querySelectorAll('tr td input');
        for (const input of inputs) {
            input.value = '';
        }

        messageParagraph.textContent = '';
        table.style.border = '';
    }

    function isValid(array) {
        if (!array.includes(1) || !array.includes(2) || !array.includes(3)) {
            table.style.border = "2px solid red";
            messageParagraph.textContent = 'NOP! You are not done yet...';
            messageParagraph.style.color = "red";
            return 'not finished';
        }
    }
}