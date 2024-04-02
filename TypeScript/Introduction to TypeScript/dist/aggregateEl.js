"use strict";
function aggregateEl(numsArr) {
    const sum = numsArr.reduce((a, b) => a + b);
    let sumReversedNums = 0;
    for (const num of numsArr) {
        sumReversedNums += 1 / num;
    }
    let concatNums = '';
    for (const num of numsArr) {
        concatNums += num;
    }
    console.log(sum);
    console.log(sumReversedNums);
    console.log(concatNums);
}
aggregateEl([2, 4, 8, 16]);
//# sourceMappingURL=aggregateEl.js.map