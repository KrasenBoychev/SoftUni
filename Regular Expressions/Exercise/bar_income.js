function barIncome(input) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/;
    let totalIncome = 0;

    let command = input.shift();
    while (command != 'end of shift') {
        let match = command.match(pattern);
        if (match) {
            let {customer, product, count, price} = match.groups;

            let totalPrice = count * price;
            totalIncome += totalPrice;

            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }
        command = input.shift();
    }

    console.log(`Total income:`, totalIncome.toFixed(2));
}
barIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);

barIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);
