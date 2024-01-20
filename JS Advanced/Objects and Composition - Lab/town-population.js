function townPopulation(towns) {
    let townsInfo = {};

    for (const town of towns) {
        let [name, population] = town.split(` <-> `);

        if (townsInfo.hasOwnProperty(name) == false) {
            townsInfo[name] = 0;
        }

        townsInfo[name] += Number(population);
    }

    for (let town in townsInfo) {
        console.log(town, `:`, townsInfo[town]);
    }
}

townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);