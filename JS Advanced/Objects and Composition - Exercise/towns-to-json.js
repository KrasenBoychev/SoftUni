function townsToJson(input) {
    let towns = [];

    let commands = input
        .shift()
        .split(`|`)
        .slice(1, 4);

    commands = commands.map(x => x.trim());
    let key1 = commands[0];
    let key2 = commands[1];
    let key3 = commands[2];

    for (const line of input) {

        let details = line.split(`|`).slice(1, 4);
        details = details.map(x => x.trim());

        let townObj = {};
        townObj[key1] = details[0];
        townObj[key2] = Number(Number(details[1]).toFixed(2));
        townObj[key3] = Number(Number(details[2]).toFixed(2));

        towns.push(townObj);
    }
        console.log(JSON.stringify(towns));
}

townsToJson(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);