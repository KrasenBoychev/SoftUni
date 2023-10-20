function employees(names) {
    let person = {};

    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        person.name = name;
        let phoneNum = name.length;
        console.log(`Name: ${name} -- Personal Number: ${phoneNum}`);
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);