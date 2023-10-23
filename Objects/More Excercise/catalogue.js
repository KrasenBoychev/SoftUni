function catalogue(list) {
    let listObjects = [];
    list.forEach(element => {
        let [name, price] = element.split(` : `);
        let currItem = {name, price};
        listObjects.push(currItem);
    });

    listObjects.sort((a,b) => a.name.localeCompare(b.name));

    let headLetter = "";
    listObjects.forEach(element => {
        let startingLetter = element.name[0];
        if (startingLetter != headLetter) {
            headLetter = startingLetter;
            console.log(headLetter);
        } 
        console.log(`  ${element.name}: ${element.price}`);
    });

}
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]);