function bunnyKill(bunnies) {
    let totalDamage = 0;
    let countBunnies = 0;

    let bombBunniesCoordinates = bunnies.pop().split(" ");

    for (let i = 0; i < bunnies.length; i++){
        bunnies[i] = bunnies[i].split(" ").map(Number);
    }

    for (let coordinates = 0; coordinates < bombBunniesCoordinates.length; coordinates++) {
        let bombBunny = bombBunniesCoordinates[coordinates].split(",");
        let bombRow = Number(bombBunny[0]);
        let bombIndex = Number(bombBunny[1]);


        let currentRow = bunnies[bombRow];
        let bombPower = currentRow[bombIndex];

        if (bombPower == 0) {
            continue;
        }

        currentRow = checkCurrentRow(bombPower, currentRow, bombIndex);
        bunnies[bombRow] = currentRow;
        
        let rowAbove;
        if (bombRow > 0) {
            rowAbove = bunnies[bombRow - 1];
            rowAbove = checkCurrentRow(bombPower, rowAbove, bombIndex);
            bunnies[bombRow - 1] = rowAbove;
         }

         let rowBelow;
         if (bombRow < bunnies.length - 1) {
            rowBelow = bunnies[bombRow + 1];
            rowBelow = checkCurrentRow(bombPower, rowBelow, bombIndex);
            bunnies[bombRow + 1] = rowBelow;
         }

         totalDamage += bombPower;
         countBunnies++;
    }

    for (let i = 0; i < bunnies.length; i++){
        totalDamage += filterDeathBunnies(bunnies[i]);
    }
    console.log(totalDamage);
    console.log(countBunnies);

    function checkCurrentRow(explosionPower, row, index) {

        row[index] -= explosionPower;

        if(row[index] < 0) {
            row[index] = 0;
        }

        if (index > 0 && index < (row.length - 1)) {
            row[index - 1] -= explosionPower;
            row[index + 1] -= explosionPower;
        } else if (index == 0) {
            row[index + 1] -= explosionPower;
        } else {
            row[index - 1] -= explosionPower;
        }
    
        if (row[index - 1] < 0) {
            row[index - 1] = 0;
        }
        if (row[index + 1] < 0) {
            row[index + 1] = 0;
        }
        return row;
    }
    
    function filterDeathBunnies(array) {
        let filteredArray = array.filter(x => x > 0);
        let sum = 0;
        for (let el of filteredArray) {
            sum += el;
            countBunnies++;
        }
        return sum;
    }
}

bunnyKill(['5 10 15 20',
'10 10 10 10',
'10 15 2 10',
'10 10 10 10',
'2,2 0,1']);
