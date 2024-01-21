function storeCatalogue(input) {
    let catalogue = {};

    for (const line of input) {
        let [name, price] = line.split(` : `);
        price = Number(price);

        let firstLetter = name[0];

        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = {};
        }

        catalogue[firstLetter][name] = price;
    }

    let sortedCatalogue = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    sortedCatalogue.forEach(element => {
        console.log(element[0]);
       
        let sortedItems = Object.entries(element[1]).sort((a, b) => a[0].localeCompare(b[0]));
        for (const [key, value] of sortedItems) {
            console.log(`  ${key}: ${value}`);
        }
    });
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);