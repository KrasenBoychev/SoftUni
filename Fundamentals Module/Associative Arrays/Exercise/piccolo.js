function piccolo(input) {
    let cars = {};
    for (let element of input) {
        let [direction, carNumber] = element.split(`, `);
        cars[carNumber] = direction;
    }

    let entries = Object.entries(cars);
    let parkedCars = {};

    for (let [carNumber, direction] of entries) {
        if (direction == "IN") {
            parkedCars[carNumber] = direction;
        }
    }

    let carInfo = Object.entries(parkedCars).sort((a, b) => a[0].localeCompare(b[0]));

    for (let car of carInfo) {
        console.log(car[0]);
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);