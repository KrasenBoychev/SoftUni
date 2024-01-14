function aggregateElements(array) {

    let sum = 0;
    for (const el of array) {
        sum += el;
    }
    console.log(sum);

    let sumInverse = 0;
    for (const el of array) {
        sumInverse += (1 / el);
    }
    console.log(sumInverse);

    let str = ``;
    for (const el of array) {
        str += el;
    }
    console.log(str);
}

aggregateElements([1, 2, 3]);