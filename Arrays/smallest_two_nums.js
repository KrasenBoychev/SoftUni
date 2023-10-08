function smallestTwoNums(inputArr) {
    inputArr.sort((a, b) => a-b);
    console.log(inputArr.slice(0, 2).join(` `));
}
smallestTwoNums([3, 0, 10, 4, 7, 3]);