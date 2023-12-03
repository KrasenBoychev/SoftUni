function bookShelf(input) {
    let dataBooks = {};

    for (let command of input) {
        if (command.includes(` -> `)) {
            let [shelfId, shelfGenre] = command.split(` -> `);

            if (!(shelfId in dataBooks)) {
                dataBooks[shelfId] = {};
                dataBooks[shelfId][shelfGenre] = [];
            }

        } else if (command.includes(`: `)) {
            let [bookTitle, info] = command.split(`: `);
            let [bookAuthor, bookGenre] = info.split(`, `);

            let shelvesEntries = Object.entries(dataBooks);
            for (const shelf of shelvesEntries) {
                if (bookGenre in shelf[1]) {
                    shelf[1][bookGenre].push(`${bookTitle}: ${bookAuthor}`)
                }
            }
        }
    }

    let sortedShelves = Object.entries(dataBooks)
            .sort((a, b) => Object.values(b[1])[0].length - Object.values(a[1])[0].length);

    sortedShelves.forEach(shelf => {
        let shelfGenre = Object.keys(shelf[1]);
        let books = shelf[1][shelfGenre];
        let booksCount = books.length;
        console.log(`${shelf[0]} ${shelfGenre}: ${booksCount}`);

        let sortedBooks = books.sort((a, b) => a.localeCompare(b));
        for (const book of sortedBooks) {
            console.log(`--> ${book}`);
        }
    });
}
// bookShelf(['1 -> history', 
//            '1 -> action', 
//            'Death in Time: Criss Bell, mystery', 
//            '2 -> mystery', 
//            '3 -> sci-fi', 
//            'Child of Silver: Bruce Rich, mystery', 
//            'Hurting Secrets: Dustin Bolt, action', 
//            'Future of Dawn: Aiden Rose, sci-fi', 
//            'Lions and Rats: Gabe Roads, history', 
//            '2 -> romance', 
//            'Effect of the Void: Shay B, romance', 
//            'Losing Dreams: Gail Starr, sci-fi', 
//            'Name of Earth: Jo Bell, sci-fi', 
//            'Pilots of Stone: Brook Jay, history']);

bookShelf(['1 -> mystery', '2 -> sci-fi',
           'Child of Silver: Bruce Rich, mystery',
           'Lions and Rats: Gabe Roads, history',
           'Effect of the Void: Shay B, romance',
           'Losing Dreams: Gail Starr, sci-fi',
           'Name of Earth: Jo Bell, sci-fi']);