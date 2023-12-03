function computerStore(prices) {

    let tax = 0.2; //20% tax
    let specialDiscount = 0.1; //10% tax
    let totalTax = 0;
    let totalPriceWithoutTax = 0;
    let i = 0;
    while (i < prices.length - 1) {
        let partPrice = Number(prices[i]);
        if(partPrice < 0) {
            console.log(`Invalid price!`);
            i++;
            continue;
        }
        totalPriceWithoutTax += partPrice;
        let currPartTax = partPrice * tax;
        totalTax += currPartTax;
        i++;
    }

    if (totalPriceWithoutTax == 0) {
        console.log(`Invalid order!`);
    } else {
        let totalPrice = totalPriceWithoutTax + totalTax;
        let customerType = prices.pop();
        if (customerType == "special") {
            let discount = totalPrice * specialDiscount;
            totalPrice -= discount;
        }
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPriceWithoutTax.toFixed(2)}$`);
        console.log(`Taxes: ${totalTax.toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }

}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ]);