function armies(input) {
    let leaders = {};

    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        
        if (command.includes(`arrives`)) {
            let leaderName = command.replace(` arrives`, ``);
            leaders[leaderName] = {};

        } else if (command.includes(`:`)) {
            let [leaderName, army] = command.split(`: `);
            if (leaderName in leaders) {
                let [armyName, armyCount] = army.split(`, `);
                armyCount = Number(armyCount);
                leaders[leaderName][armyName] = armyCount;
            }

        } else if (command.includes(`+`)) {
            let [armyName, armyCount] = command.split(` + `);
            armyCount = Number(armyCount);
            for (let leader in leaders) {
                let armies = Object.keys(leaders[leader]);
                if (armies.includes(armyName)) {
                    leaders[leader][armyName] += armyCount;
                }
            }

        } else if (command.includes(`defeated`)) {
            let leaderName = command.replace(` defeated`, ``);
            if (leaderName in leaders) {
                delete leaders[leaderName];
            }
        }
    }

    for (let leader in leaders) {
        let armies = leaders[leader];
        let values = Object.values(armies);
        if (values.length > 0) {
            let total = values.reduce((acc, value) => acc + value);
            leaders[leader][`total`] = total;
        } else {
            leaders[leader][`total`] = 0;
        }
    }
    let entries = Object.entries(leaders);
    let sortedLeaders = entries.sort((a, b) => b[1].total - a[1].total);
    
    for (let leader of sortedLeaders) {
        console.log(`${leader[0]}: ${leader[1].total}`);

        let armiesInfo = Object.entries(leader[1]);
        let sortedAmries = armiesInfo.sort((a, b) => b[1] - a[1]);
        
        for (let army of sortedAmries) {
            if (army[0] != `total`) {
                console.log(`>>> ${army[0]} - ${army[1]}`);
            }
        }
    }

}
// armies(['Rick Burr arrives', 
//         'Fergus: Wexamp, 30245', 
//         'Rick Burr: Juard, 50000', 
//         'Findlay arrives', 
//         'Findlay: Britox, 34540', 
//         'Wexamp + 6000', 
//         'Juard + 1350', 
//         'Britox + 4500', 
//         'Porter arrives', 
//         'Porter: Legion, 55000', 
//         'Legion + 302', 
//         'Rick Burr defeated', 
//         'Porter: Retix, 3205']);

armies(['Rick Burr arrives', 
        'Findlay arrives', 
        'Rick Burr: Juard, 1500', 
        'Wexamp arrives', 
        //'Findlay: Wexamp, 34540', 
        'Wexamp + 340', 
        'Wexamp: Britox, 1155', 
        'Wexamp: Juard, 43423']);