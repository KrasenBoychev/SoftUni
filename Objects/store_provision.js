function storeProvision(currStock, orderedProducts) {
    let result = {
        printResult() {
            console.log(`${result.name} -> ${result.value}`);
        }
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i];
        let orderedQty = Number(orderedProducts[i + 1]);
        if (currStock.includes(product)) {
            let indexCurrStock = currStock.indexOf(product);
            let currQty = Number(currStock[indexCurrStock + 1]);
            currStock[indexCurrStock + 1] = currQty + orderedQty;
        } else {
            currStock.push(product, orderedQty);
        }
    }

    for (let j = 0; j < currStock.length; j += 2) {
        result.name = currStock[j];
        result.value = currStock[j+1];
        result.printResult();
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]);