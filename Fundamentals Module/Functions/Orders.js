function orders(product, qty) {
    let total = 0;
    switch (product) {
        case "coffee": total = qty * 1.5;
            break;
        case "water": total = qty * 1;
            break;
        case "coke": total = qty * 1.4;
            break;
        case "snacks": total = qty * 2;
            break;
    }
    console.log(total.toFixed(2));
}
orders("coffee", 2)