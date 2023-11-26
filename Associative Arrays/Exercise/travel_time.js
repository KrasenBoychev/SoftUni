function travelTime(input) {
    let storeDestinations = [];

    for (let newLine of input) {
        let [newCountry, newTown, newCost] = newLine.split(` > `);
        newCost = Number(newCost);
        let isNewCountryInDestinations = false;

        for (let i = 0; i < storeDestinations.length; i++) {

            if (storeDestinations[i].country == newCountry) {

                if (storeDestinations[i].town == newTown) {

                    if (storeDestinations[i].cost > newCost) {
                        storeDestinations[i].cost = newCost;
                    }
                    isNewCountryInDestinations = true;
                }
            }
        }

        if (isNewCountryInDestinations == false) {
            let createCountry = {};
            createCountry.country = newCountry;
            createCountry.town = newTown;
            createCountry.cost = newCost;
            storeDestinations.push(createCountry);
        }
    }

    let sortedDestinations = storeDestinations.sort((a, b) => a.country.localeCompare(b.country) || a.cost - b.cost);

    let printResult = [];
    let index = 0;

    while (index < sortedDestinations.length) {

        if (index == 0) {
            printResult.push(`${sortedDestinations[index].country} -> `);
                printResult.push(`${sortedDestinations[index].town} -> `);
                printResult.push(`${sortedDestinations[index].cost} `);
        } else {

            if (sortedDestinations[index].country == sortedDestinations[index - 1].country) {
                printResult.push(`${sortedDestinations[index].town} -> `);
                printResult.push(`${sortedDestinations[index].cost} `);
            } else {
                console.log(printResult.join(``));
                printResult = [];
                printResult.push(`${sortedDestinations[index].country} -> `);
                printResult.push(`${sortedDestinations[index].town} -> `);
                printResult.push(`${sortedDestinations[index].cost} `);
            }
        }

        index++;
    }
    console.log(printResult.join(``));
}
// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
// ]);

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]);