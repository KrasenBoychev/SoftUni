function fruit(type, weight, price) {
    
    let total = (weight / 1000) * price;

    console.log(`I need $${total.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${type}.`);
}

fruit('orange', 2500, 1.80);