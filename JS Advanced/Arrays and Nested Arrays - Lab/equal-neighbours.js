function neighbours(matrix) {
    let countPairs = 0;

    for (let row = 0; row < matrix.length; row++) {
        let currRow = matrix[row];
        
        for (let i = 0; i < currRow.length; i++) {
            let currSymbol = currRow[i];

            if (currSymbol === currRow[i+1]) {
                countPairs++;
            } 

             if (row < matrix.length - 1) {
                if (currSymbol === matrix[row + 1][i]) {
                    countPairs++;
                } 
             }
            
        }
    }
    return countPairs;
}

neighbours([['2', '2', '5', '7', '4'],
            ['4', '0', '5', '3', '4'],
            ['2', '5', '5', '4', '2']]);