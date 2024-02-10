function company(input) {

    let cars = {};

    for (const car of input) {
        let [brand, model, producedCars] = car.split(` | `);

        if (!(brand in cars)) {
            cars[brand] = {};
        }

        if (!(model in cars[brand])) {
            cars[brand][model] = 0;
        }
        
        cars[brand][model] += Number(producedCars);
    }

    for (const [brand, models] of Object.entries(cars)) {
        console.log(brand);

        for (const [model, producedCars] of Object.entries(models)) {
            console.log(`###${model} -> ${producedCars}`);
        }
    }  
};

company(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);


