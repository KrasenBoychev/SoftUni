function lowestPricesInCities(input) {
    let productsList = {};

    for (const line of input) {
        let [town, product, price] = line.split(` | `);
        price = Number(price);

        if (product in productsList) {
            
            if (productsList[product].price > price) {
                productsList[product].price = price;
                productsList[product].town = town;
            }

        } else {
            productsList[product] = {town, price};
        }
    }

    Object.entries(productsList).forEach(element => {
        console.log(`${element[0]} -> ${element[1].price} (${element[1].town})`);
    });
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
    ]);