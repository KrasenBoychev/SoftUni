function biggerHalf(arr: Array<number>): Array<number> {
    const sortedArr: Array<number> = arr.sort((a, b) => a - b);
    const resultArr: Array<number> = sortedArr.slice(Math.floor(sortedArr.length / 2));

    return resultArr;
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
