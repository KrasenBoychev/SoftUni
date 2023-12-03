function schoolLibrary(inputArr) {
    let booksShelf = inputArr.shift().split(`&`);
    let i = 0;
    while (inputArr[i] != "Done") {
        let command = inputArr[i].split(` | `);
        let action = command[0];
        switch (action) {
            case "Add Book": add(command[1]);
                break;
            case "Take Book": take(command[1])
                break;
            case "Swap Books": swap(command[1], command[2]);
                break;
            case "Insert Book": insert(command[1]);
                break;
            case "Check Book": check(command[1]);
                break;
        }
        i++;

        function add(name) {
            if (!booksShelf.includes(name)) {
                booksShelf.unshift(name);
            }
        }

        function take(name) {
            if (booksShelf.includes(name)) {
                booksShelf = booksShelf.filter(x => x != name);
            }
        }

        function swap(bookOne, bookTwo) {
            if(booksShelf.includes(bookOne) && booksShelf.includes(bookTwo)) {
                let indexOne = booksShelf.indexOf(bookOne);
                let indexTwo = booksShelf.indexOf(bookTwo);
                booksShelf.splice(indexOne, 1, bookTwo);
                booksShelf.splice(indexTwo, 1, bookOne);
            }
        }

        function insert(name) {
            if (!booksShelf.includes(name)) {
                booksShelf.push(name);
            }
        }

        function check(index) {
            index = Number(index);
            if (index >= 0 && index < booksShelf.length) {
                console.log(booksShelf[index]);
            }
        }
    }
    console.log(booksShelf.join(`, `));
}
schoolLibrary(
    ["War and Peace&Hamlet&Ulysses&MadameBovary",

"Check Book | 2",

"Swap Books | Don Quixote | Ulysses",

"Done"]);