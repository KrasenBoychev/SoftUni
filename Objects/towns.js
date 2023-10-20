function towns(input) {
    class townInfo {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
        print() {
            console.log(`{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`);
        }
    }

    let allTowns = [];
    for (let i = 0; i < input.length; i++) {
        let townData = input[i].split(` | `);
        let town, latitude, longitude;
        [town, latitude, longitude] = [townData[0], Number(townData[1]).toFixed(2), Number(townData[2]).toFixed(2)]
        allTowns.push(new townInfo(town, latitude, longitude));
    }

    for (let el of allTowns) {
        el.print()
    }
}
towns(['Sofia | 42.696552 | 23.32601',
     'Beijing | 39.913818 | 116.363625']);