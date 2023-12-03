function garage(input) {
    let garages = {};

    for (let i = 0; i < input.length; i++) {
        let newLine = input[i];
        let [garageNum, info] = newLine.split(` - `);
        
        if ((garageNum in garages) == false) {
            garages[garageNum] = {};
        } 

        let splitInfo = info.split(`, `);
        garages[garageNum][i] = {};
        for (const el of splitInfo) {
            let [type, value] = el.split(`: `);
            garages[garageNum][i][type] = value;
        } 
    }

    for (let garage in garages) {
        let cars = garages[garage];
        console.log(`Garage № ${garage}`);
        
        for (const car in cars) {
            let carInfo = cars[car];
            let entries = Object.entries(carInfo);
            
            entries = entries.map(element => element.join(` - `));
            entries = entries.join(`, `);
            console.log(`--- ${entries}`);
        }
    }
}

// garage(['1 - color: blue, fuel type: diesel', 
//         '1 - color: red, manufacture: Audi', 
//         '2 - fuel type: petrol', 
//         '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

garage(['1 - color: green, fuel type: petrol',
        '1 - color: dark red, manufacture: WV',
        '2 - fuel type: diesel',
        '3 - color: dark blue, fuel type: petrol']);