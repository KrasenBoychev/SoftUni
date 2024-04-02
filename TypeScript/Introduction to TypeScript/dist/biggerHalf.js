"use strict";
function biggerHalf(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const resultArr = sortedArr.slice(Math.floor(sortedArr.length / 2));
    return resultArr;
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
//# sourceMappingURL=biggerHalf.js.map