function wildZoo(input) {
    let animals = {};

    let line = input.shift();
    while (line != `EndDay`) {
        let [command, animalInfo] = line.split(`: `);

        if (command == `Add`) {
            let [name, foodQty, area] = animalInfo.split(`-`);
            foodQty = Number(foodQty);

            if (name in animals) {
                animals[name].food += foodQty;

            } else {
                animals[name] = {food: foodQty, area: area};
            }

        } else if (command == `Feed`) {
            let [name, foodQty] = animalInfo.split(`-`);
            foodQty = Number(foodQty);

            if (name in animals) {
                animals[name].food -= foodQty;

                if (animals[name].food <= 0) {
                    delete animals[name];
                    console.log(`${name} was successfully fed`);
                }
            }
        }
        line = input.shift();
    }

    console.log(`Animals:`);
    let areas = {};

    let animalsEntries = Object.entries(animals);
    animalsEntries.forEach(animal => {
        console.log(` ${animal[0]} -> ${animal[1].food}g`);

        if (animal[1].food > 0) {
            if (animal[1].area in areas) {
                areas[animal[1].area] += 1;
            } else {
                areas[animal[1].area] = 1;
            }
        }
    });

    console.log(`Areas with hungry animals:`);

    for (const [key, value] of Object.entries(areas)) {
        console.log(` ${key}: ${value}`);
    }

}

// wildZoo(["Add: Adam-4500-ByTheCreek",

// "Add: Maya-7600-WaterfallArea",

// "Add: Maya-1230-WaterfallArea",

// "Feed: Jamie-2000",

// "EndDay"]);


// wildZoo(["Add: Jamie-600-WaterfallArea",

// "Add: Maya-6570-WaterfallArea",

// "Add: Adam-4500-ByTheCreek",

// "Add: Bobbie-6570-WaterfallArea",

// "Feed: Jamie-2000",

// "Feed: Adam-2000",

// "Feed: Adam-2500",

// "EndDay"]);


wildZoo(["Add: Bonie-3490-RiverArea",

"Add: Sam-5430-DeepWoodsArea",

"Add: Bonie-200-RiverArea",

"Add: Maya-4560-ByTheCreek",

"Feed: Maya-2390",

"Feed: Bonie-3500",

"Feed: Johny-3400",

"Feed: Sam-5500",

"EndDay"]);