function needForSpeed(input) {
    let n = Number(input.shift());
    let storeCars = [];
    let count = 1;
    while (count <= n) {
        let [newCar, newMileage, newFuel] = input.shift().split(`|`);
        let carObj = {};
        carObj.car = newCar;
        carObj.mileage = newMileage;
        carObj.fuel = newFuel;
        storeCars.push(carObj);
        count++;
    }

    let newLine = input.shift();
    while(newLine != `Stop`) {
        if(newLine.startsWith(`Drive`)) {
            let [text, car, distance, fuel] = newLine.split(` : `);
            drive(car, distance, fuel);

        } else if(newLine.startsWith(`Refuel`)) {
            let [text, car, fuel] = newLine.split(` : `);
            refuel(car, fuel);

        } else if(newLine.startsWith(`Revert`)) {
            let [text, car, distance] = newLine.split(` : `);
            revert(car, distance);
        }

        newLine = input.shift();
    }


    function drive(carModel, distanceToCover, fuelToSpent) {
       for (let index = 0; index < storeCars.length; index++) {
        let el = storeCars[index];
            if(el.car == carModel) {
                let currFuel = Number(el.fuel);
                fuelToSpent = Number(fuelToSpent);

                if(currFuel < fuelToSpent) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    let currMileage = Number(el.mileage);
                    distanceToCover = Number(distanceToCover);
                    el.mileage = currMileage + distanceToCover;

                    el.fuel = currFuel - fuelToSpent;
                    console.log(`${el.car} driven for ${distanceToCover} kilometers. ${fuelToSpent} liters of fuel consumed.`);

                    if(el.mileage >= 100000) {
                        console.log(`Time to sell the ${el.car}!`);
                        storeCars.splice(index, 1);
                    }
                }
            }
       }
    }

    function refuel(carModel, fuelReffiling) {
        for (let index = 0; index < storeCars.length; index++) {
            let el = storeCars[index];
            if(el.car == carModel) {
                let currFuel = el.fuel;
                fuelReffiling = Number(fuelReffiling);
                let sumFuel = currFuel + fuelReffiling;
                let fuelUsed = 0;
                if(sumFuel > 75) {
                    el.fuel = 75;
                    fuelUsed = 75 - currFuel;
                } else {
                    el.fuel = sumFuel;
                    fuelUsed = fuelReffiling;
                }
                console.log(`${el.car} refueled with ${fuelUsed} liters`);
            }
        }
    }

    function revert(carModel, mileageToChange) {
        for (let index = 0; index < storeCars.length; index++) {
            let el = storeCars[index];
            if(el.car == carModel) {
                let currMileage = Number(el.mileage);
                mileageToChange = Number(mileageToChange);

                el.mileage = currMileage - mileageToChange;
                if(el.mileage < 10000) {
                    el.mileage = 10000;
                } else {
                    console.log(`${el.car} mileage decreased by ${mileageToChange} kilometers`);
                }
            }
        }
    }
    
    for (const el of storeCars) {
        console.log(`${el.car} -> Mileage: ${el.mileage} kms, Fuel in the tank: ${el.fuel} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543000 : 47',
    'Drive : Mercedes CLS : 940000 : 11',
    'Drive : Volkswagen Passat CC : 690000 : 1',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);

// needForSpeed([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
//   ]);