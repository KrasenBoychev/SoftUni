type ProductsObj = {
    [key: string]: {
        productPrice: number,
        productTown: string
    }
};

const products: ProductsObj = {};

function addproduct(town: string, product: string, price: number) {
    products[product] = {
        productPrice: price,
        productTown: town
    }
}

function cities(input: Array<string>) {

    input.forEach(line => {
        const [town, product, price] = line.split(' | ');

        if (product in products) {

            if (products[product].productPrice > Number(price)) {
                addproduct(town, product, Number(price))
            }   

        } else {
            addproduct(town, product, Number(price))
        }
    });

    Object.entries(products).forEach(product => {
        console.log(`${product[0]} -> ${product[1].productPrice} (${product[1].productTown})`);
    });
}

cities(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']);