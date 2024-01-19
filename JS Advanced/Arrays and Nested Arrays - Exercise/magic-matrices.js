function magicMatrices(matrix) {

    let isMagic = true;
    let total = 0;

    for (let row = 0; row < matrix.length; row++) {

        let currRowSum = 0;
        for (let i = 0; i < matrix[row].length; i++) {
            currRowSum += matrix[row][i];
        }

        let currColSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            currColSum += matrix[i][row];
        }

        if (currRowSum == currColSum) {
        } else {
            isMagic = false;
        }

        if (row == 0) {
            total = currRowSum;
        } else {
            if (currRowSum != total || currColSum != total) {
                isMagic = false;
            }
        }

        if (isMagic == false) {
            break;
        }

    }


    console.log(isMagic);
}

magicMatrices([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);
