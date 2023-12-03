function searchForNum(intsArr, numsArr) {
    let takeIns = numsArr[0];
    let deleteInts = numsArr[1];
    let searchNum = numsArr[2];

    let resultArr = intsArr.splice(0, takeIns);
    let sliced = resultArr.slice(deleteInts);
    sliced = sliced.filter(x => x == searchNum);

    console.log(`Number ${searchNum} occurs ${sliced.length} times.`);
}
searchForNum([7, 5, 5, 8, 2, 7],
    [3, 1, 5]);