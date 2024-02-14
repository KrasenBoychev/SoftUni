function diagonalAttack(array) {
    let sum1 = 0;
    let sum2 = 0;

    for (let index = 0; index < array.length; index++) {
        let row = array[index];
        let splitRow = row.split(` `);
        let num1 = splitRow[index];
        sum1 += Number(num1);

        let num2 = splitRow[(splitRow.length - 1) - index];
        sum2 += Number(num2);
    }
    
    if (sum1 == sum2) {
        for (let index = 0; index < array.length; index++) {
            let row = array[index].split(` `);
            
            let result = [];
            for (let a = 0; a < row.length; a++) {
                if (a == index) {
                    result.push(row[index]);
                } 
                else if (a == ((array.length - 1) - index)) {
                    result.push(row[((array.length - 1) - index)]);
                }
                else {
                    result.push(sum1);
                }
            }
            console.log(result.join(` `));
        }
    }
    else {
        for (const row of array) {
            console.log(row);
        }
    }
}

diagonalAttack(
    ['1 1 1',
    '1 1 1',
    '1 1 0']);