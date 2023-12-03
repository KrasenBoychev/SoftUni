function oddNums(inputArr) {
    let result = inputArr
        .filter((num, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse();
         console.log(result.join(` `));
}
oddNums([3, 0, 10, 4, 7, 3]);