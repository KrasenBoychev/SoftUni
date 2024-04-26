type ProductType = { townName: string, productPrice: number }

type ResultType = { [key: string]: ProductType}

function lowestPrices(input: string[]): string {

    const result = {} as ResultType;

    for (const line of input) {
        const [townName, productName, productPrice] = line.split(' | ');

        if (productName in result) {

            if (result[productName].productPrice > Number(productPrice)) {
                result[productName] = {townName, productPrice: Number(productPrice)};
            }

        } else {
            result[productName] = {townName, productPrice: Number(productPrice)};
        }
    }

    let printResult: string[] = [];

    Object.entries(result).forEach(product => {
        printResult.push(`${product[0]} -> ${product[1].productPrice} (${product[1].townName})`);
    });

    return printResult.join(`\n`);
}

const cities = lowestPrices(
    ['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 100',

'New York | Burger | 10']
);

console.log(cities);
