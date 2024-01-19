function biggestEl(allArrays) {
    let newArr = [];
    for (const arr of allArrays) {
        newArr.push(...arr);
    }

    let sortedArr = newArr.sort((a, b) => b - a);

    return sortedArr[0];
}

biggestEl([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]);