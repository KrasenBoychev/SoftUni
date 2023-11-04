function phoneBook(inputArr) {
    let book = {};

    for (let element of inputArr) {
        let [name, number] = element.split(` `);
        book[name] = number;
    }

    for (let [name, number] of Object.entries(book)) {
        console.log(name, `->`, number);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);