function solution() {

    let microelements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    let commands = {
        restock: (microEl, qty) => {
            microelements[microEl] += qty;
            return `Success`;
        },
        prepare: (recipe, qtyToPrepare) => {
            return prepareMeal(recipes[recipe], qtyToPrepare);
        },
        report: () => { return printMicroEl() }
    }

    return function (input) {

        let [command, element, qty] = input.split(" ");
        qty = Number(qty);
        return commands[command](element, qty);
    }


    function prepareMeal(recipe, qtyToPrepare) {

        let enoughProducts = true;

        for (const microEl in recipe) {
            let qtyNeeded = recipe[microEl] * qtyToPrepare;
            let qtyAvailable = microelements[microEl];

            if (qtyNeeded > qtyAvailable) {
                enoughProducts = false;
                return `Error: not enough ${microEl} in stock`;
            }
        }

        if (enoughProducts == true) {
            for (const microEl in recipe) {
                microelements[microEl] -= recipe[microEl] * qtyToPrepare;
            }

            return `Success`;
        }
    }

    function printMicroEl() {
        let printedMessage = [];
        for (const [el, qty] of Object.entries(microelements)) {
            printedMessage.push(`${el}=${qty}`);
        }
        return printedMessage.join(" ");
    }
}


let manager = solution();
console.log(manager("prepare turkey 1"));// Success 
console.log(manager("restock protein 10"));// Error: not enough carbohydrate in stock
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));