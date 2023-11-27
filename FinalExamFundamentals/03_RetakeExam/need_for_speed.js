function needForSpeed(input) {

    let n = Number(input.shift());
    let storeCars = {};
    for (let index = 0; index < n; index++) {
        let [car, mileage, fuel] = input.shift().split(`|`);
        mileage = Number(mileage);
        fuel = Number(fuel);
        storeCars[car] = {mileage, fuel};
    }

    while (input[0] != `Stop`) {
        let tokens = input.shift().split(` : `);
        let action = tokens.shift();
        let car = tokens.shift();

        switch (action) {
            case `Drive`:
                let [distance, fuel] = tokens;
                distance = Number(distance);
                fuel = Number(fuel);
                drive(car, distance, fuel);
                break;

            case `Refuel`:
                let fuelToRefill = Number(tokens);
                refuel(car, fuelToRefill);
                break;

            case `Revert`:
                let km = Number(tokens);
                revert(car, km);
                break; 
        }
    }

    for (let car in storeCars) {
        let carModel = storeCars[car]
        console.log(`${car} -> Mileage: ${carModel.mileage} kms, Fuel in the tank: ${carModel.fuel} lt.`);
    }

    function drive(car, distance, fuel) {
        let carModel = storeCars[car];
        if (carModel.fuel < fuel) {
            console.log(`Not enough fuel to make that ride`);
        } else {
            carModel.mileage += distance;
            carModel.fuel -= fuel;
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

            if (carModel.mileage >= 100000) {
                delete storeCars[car];
                console.log(`Time to sell the ${car}!`);
            }
        }
    }
    
    function refuel(car, fuelToRefill) {
        let carModel = storeCars[car];
        let fuelNeeded = 0;
        if ((carModel.fuel + fuelToRefill) > 75) {
            fuelNeeded = 75 - carModel.fuel;
            carModel.fuel = 75;
        } else {
            fuelNeeded = fuelToRefill;
            carModel.fuel += fuelToRefill;
        }
        console.log(`${car} refueled with ${fuelNeeded} liters`);
    }

    function revert (car, km) {
        let carModel = storeCars[car];
        carModel.mileage -= km;
        if (carModel.mileage < 10000) {
            carModel.mileage = 10000;
        } else {
            console.log(`${car} mileage decreased by ${km} kilometers`);
        }
    }

}
// needForSpeed([
//         '3',
//         'Audi A6|38000|62',
//         'Mercedes CLS|11000|35',
//         'Volkswagen Passat CC|45678|5',
//         'Drive : Audi A6 : 543 : 47',
//         'Drive : Mercedes CLS : 94 : 11',
//         'Drive : Volkswagen Passat CC : 69 : 8',
//         'Refuel : Audi A6 : 50',
//         'Revert : Mercedes CLS : 500',
//         'Revert : Audi A6 : 30000',
//         'Stop']);

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]);