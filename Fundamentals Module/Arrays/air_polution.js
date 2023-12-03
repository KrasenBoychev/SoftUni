function airPolution(mapSofia, commandsArr) {

    for (let i = 0; i < mapSofia.length; i++) {
        mapSofia[i] = mapSofia[i].split(" ").map(Number);
    }

    for (let i = 0; i < commandsArr.length; i++) {
        let command = commandsArr[i].split(" ");
        let force = command[0];
        let index = Number(command[1]);

        switch (force) {
            case "breeze":
                mapSofia[index] = breeze(mapSofia, index);
                break;
            case "gale":
                mapSofia = gale(mapSofia, index);
                break;
            case "smog":
                mapSofia = smog(mapSofia, index);
                break;
        }
    }
    searchPolutedAreas(mapSofia);

    function breeze(array, num) {
        let row = array[num];

        for (let i = 0; i < row.length; i++) {
            row[i] -= 15;
            if (row[i] < 0) {
                row[i] = 0;
            }
        }
        return row;
    }

    function gale(array, num) {
        for (let i = 0; i < array.length; i++) {
            let row = array[i];
            row[num] -= 20;
            if (row[num] < 0) {
                row[num] = 0;
            }
        }
        return array;
    }

    function smog(array, value) {
        for (let i = 0; i < array.length; i++) {
            let row = array[i];
            array[i] = row.map(x => x + value);
        }
        return array;
    }

    function searchPolutedAreas(array) {
        let total = [];
        for (let i = 0; i < array.length; i++) {
            let row = array[i];
            for (let j = 0; j < row.length; j++) {
                if (row[j] >= 50) {
                    let resultArr = [];
                    resultArr.push(i, j);
                    let saveResult = resultArr.join("-");
                    total.push(saveResult);
                }
            }
        }

        if (total.length == 0) {
            console.log(`No polluted areas`);
        } else {
            console.log(`Polluted areas: [${total.join("], [")}]`);
        }
    }
}
airPolution(['20 20 0 0 0',
'41 35 37 27 33',
'5 7 72 14 4',
'2 20 28 12 14',
'16 34 31 10 24'],
[`smog 100`]
);