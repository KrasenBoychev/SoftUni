"use strict";
function townPopulation(townsInfo) {
    const towns = {};
    townsInfo.forEach(town => {
        const [name, population] = town.split(` <-> `);
        if (!(name in towns)) {
            towns[name] = 0;
        }
        towns[name] += Number(population);
    });
    Object.entries(towns).forEach(town => {
        console.log(`${town[0]}: ${town[1]}`);
    });
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
//# sourceMappingURL=town-population.js.map