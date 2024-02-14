class FashionRetailInventory {
    storehouse;
    location;
    productStock;
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct(productName, size, quantity, price) {
        let findProduct = this.productStock.find(p => p.productName == productName && p.size == size);

        if (findProduct) {
            findProduct.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }
        else {
            this.productStock.push({
                productName,
                size,
                quantity,
                price
            });
            return `The product ${productName}, size ${size} was successfully added to the inventory`
        }
    };

    sendProduct (productName, size) {
        let findProduct = this.productStock.find(p => p.productName == productName && p.size == size);

        if (findProduct) {
            let index = this.productStock.indexOf(findProduct);
            this.productStock.splice(index, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
        else {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }
    };

    findProductsBySize(size) {
        let productsList = [];

        for (const product of this.productStock) {
            if (product.size == size) {
                productsList.push(`${product.productName}-${product.quantity} pieces`)
            }
        }

        if (productsList.length == 0) {
            return `There are no products available in that size`
        }
        else {
            return productsList.join(`, `);
        }
    };

    listProducts () {
        if(this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`
        }
        else {
            let result = [];
            result.push(`${this.storehouse} storehouse in ${this.location} available products:`);

            let sortedProducts = this.productStock.sort((p1, p2) => p1.productName.localeCompare(p2.productName));
            for (const {productName, size, quantity, price} of sortedProducts) {
                result.push(`${productName}/Size:${size}/Quantity:${quantity}/Price:${price}$`)
            }
            return result.join(`\n`);
        }
    };
};

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());