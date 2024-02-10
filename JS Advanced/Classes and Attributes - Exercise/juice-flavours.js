function juiceFlavours(input) {
    let storeJuices = {};
    let orderBottles = [];

    for (const juice of input) {
        const [name, juiceQty] = juice.split(` => `);

        if (!(name in storeJuices)) {
            storeJuices[name] = {qty: 0, bottles: 0};
        }

        storeJuices[name].qty += Number(juiceQty);

        if (storeJuices[name].qty >= 1000) {
            let addBottles = Math.floor(storeJuices[name].qty / 1000);
            storeJuices[name].bottles += addBottles;
            storeJuices[name].qty -= addBottles * 1000;
        }

        if (!orderBottles.includes(name)) {
           if (storeJuices[name].bottles >= 1) {
            orderBottles.push(name);
           }
        }
    }

    for (const juiceName of orderBottles) {
        console.log(juiceName + ` => ` + storeJuices[juiceName].bottles);
    }

};

juiceFlavours(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);