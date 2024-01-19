function diagonalSums(matrix) {
    let diagonalOne = 0;
    let diagonalTwo = 0;

    for (let i = 0; i < matrix.length; i++) {
        diagonalOne += matrix[i][i];
        diagonalTwo += matrix[i][matrix[i].length - 1 - i];
    }

    let result = `${diagonalOne} ${diagonalTwo}`

    console.log(result);
}

diagonalSums([[20, 40], [10, 60]]);

diagonalSums([[3, 5, 17],
              [-1, 7, 14],
              [1, -8, 89]]);