function rosettaStone(matrix) {

    let templateLength = matrix.shift();
    let decodingTemplate = matrix.splice(0, templateLength);

    let alphabet = [` `, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`,`R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
    let isFinished = false; // for the matrix rows
    let m = 0;
    while (m < matrix.length) {

        for (let d = 0; d < decodingTemplate.length; d++) {
            let matrixRow = matrix[m].split(" ").map(Number);
            let decodingRow = decodingTemplate[d].split(" ").map(Number);
            matrix[m] = increaseValue(matrixRow, decodingRow).join("");
            m++;
            if (m == matrix.length) {
                isFinished = true;
                break;
            }
        }
        if (isFinished == true) {
            break;
        }
    }

console.log(matrix.join(""));

    function increaseValue(originalRow, templateRow) {
        let endRow = false;
        let j = 0;
        while (j < originalRow.length) {
            for (let t = 0; t < templateRow.length; t++) {
                originalRow[j] += templateRow[t];
                originalRow[j] = convertToLetters(originalRow[j]);
                j++;
                if (j == originalRow.length) {
                    endRow = true;
                    break;
                }
            }
            if (endRow == true) {
                break;
            }
        }
        return originalRow;
    }

    function convertToLetters(num) {
        let result = "";
        if (num >= alphabet.length) {
            let calc = num % alphabet.length;
            result = alphabet[calc];
        } else {
            result = alphabet[num];
        }
        return result;
    }
}
rosettaStone([`1`,
    `1 3 13`,
   `12 22 14 13 25 0 4 24 23`,
   `18 24 2 25 22 0 0 11 18`,
    `8 25 6 26 8 23 13 4 14`,
    `14 3 14 10 6 1 6 16 14`,
    `11 12 2 10 24 2 13 24 0`,
    `24 24 10 14 15 25 18 24 12`,
    `4 24 0 8 4 22 19 22 14`,
    `0 11 18 26 1 19 18 13 15`,
    `8 15 14 26 24 14 26 24 14`
]);