function colorize() {
    let rows = document.querySelectorAll('tr:nth-child(even)');

    for (let row of rows) {
        row.style.background = 'teal';
    }
}