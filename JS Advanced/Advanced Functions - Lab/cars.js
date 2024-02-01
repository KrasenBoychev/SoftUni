function cars(input) {
    let cars = {};

    let result = {
        create: (name, inherits, parentName) => 
            (cars[name] = inherits ? Object.create(cars[parentName]) : {}),
        set: (name, key, value) => (cars[name][key] = value),
        print: name => {
            const entry = [];
            for (const el in cars[name]) {
                entry.push(`${el}:${cars[name][el]}`);
            }
            console.log(entry.join(`,`));
        }
    }

    for (const car of input) {
        let [command, name, key, value] = car.split(` `);

        result[command](name, key, value);
    }
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);