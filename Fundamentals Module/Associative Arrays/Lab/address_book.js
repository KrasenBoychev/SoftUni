function addressBook(input) {
    let book = {};

    for (let element of input) {
        let [name, address] = element.split(`:`);
        book[name] = address;
    }

    let entries = Object.entries(book);
    entries.sort((a,b) => a[0].localeCompare(b[0]));

    let sorted = {};

    for (let [name, address] of entries) {
        sorted[name] = address;
        console.log(name, `->`, address);
    }

}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);