class OnlineShop {
    warehouseSpace;
    constructor(warehouseSpace) {
        this.warehouseSpace = Number(warehouseSpace);
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error(`Not enough space in the warehouse.`);
        }

        let obj = {};
        obj[product] = quantity;

        this.products.push(obj);
        this.warehouseSpace -= spaceRequired;

        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        this.findProduct(product);

        let qtyFromThisProduct = this.findProduct(product)[0];
        let index = this.findProduct(product)[1];

        if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }

        if (minimalQuantity <= qtyFromThisProduct) {
            return `You have enough from product ${product}.`
        }

        this.products[index][product] = minimalQuantity;
        let difference = minimalQuantity - qtyFromThisProduct;
        return `You added ${difference} more from the ${product} products.`
    }

    sellProduct(product) {
        let isInProducts = false;

        for (let i = 0; i < this.products.length; i++) {
            let element = this.products[i];
            if (product in element) {
                isInProducts = true;
            }
        }

        if (isInProducts == false) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        this.findProduct(product);
        let qtyFromThisProduct = this.findProduct(product)[0];
        let index = this.findProduct(product)[1];

        this.products[index][product] -= 1;
        let obj = {};
        obj[product] = 1;
        this.sales.push(obj);

        return `The ${product} has been successfully sold.`;
    }


    revision() {
        if (this.sales.length == 0) {
            throw new Error(`There are no sales today!`);
        }

        let result = [];
        result.push(`You sold ${this.sales.length} products today!`);
        result.push(`Products in the warehouse:`);

        for (const product of this.products) {
            let [key, value] = Object.entries(product)[0];
            result.push(`${key}-${value} more left`);
        }

        return result.join(`\n`);
    }


    findProduct(product) {
        let isInProducts = false;
        let qtyFromThisProduct = 0;
        let index = 0;

        for (let i = 0; i < this.products.length; i++) {
            let element = this.products[i];
            if (product in element) {
                isInProducts = true;
                qtyFromThisProduct = element[product];
                index = i;
            }
        }

        if (isInProducts == false) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        return [qtyFromThisProduct, index];
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());