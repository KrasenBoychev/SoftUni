function printAndSum(startNum: number, endNum: number): string {
    let result: Array<number> = [];
    let sum: number = 0;

    for (let i: number = startNum; i <= endNum; i++) {
        result.push(i);
        sum += i;
    }

    return `${result.join(' ')}\nSum: ${sum}`;
}

const test1 = printAndSum(5, 10);
console.log(test1);

const test2 = printAndSum(0, 26);
console.log(test2);

const test3 = printAndSum(50, 60);
console.log(test3);

