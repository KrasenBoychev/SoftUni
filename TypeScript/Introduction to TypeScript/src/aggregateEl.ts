function aggregateEl(numsArr: Array<number>): void {
    const sum: number = numsArr.reduce((a, b) => a + b);

    let sumReversedNums: number = 0;
    for (const num of numsArr) {
        sumReversedNums += 1 / num;
    }

    let concatNums: string = '';
    for (const num of numsArr) {
        concatNums += num;
    }
    
    console.log(sum);
    console.log(sumReversedNums);
    console.log(concatNums);
}
aggregateEl([2, 4, 8, 16]);