function furniture(input) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;
    let items = [];
    let totalPrice = 0;

    let i = 0;
    let command = input[i];

    while (command != `Purchase`) {

        let match = command.match(pattern);

        if (match) {
            let {name, price, qty} = match.groups;

            let furniturePrice = Number(qty) * Number(price);

            items.push(name);
            totalPrice += furniturePrice;
        }
        
        i++;
        command = input[i];
    }

    console.log(`Bought furniture:`);

    if (items.length > 0) {
        console.log(items.join(`\n`));
    }
    
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']);