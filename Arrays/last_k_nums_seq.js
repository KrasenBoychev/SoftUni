function lastKNumsSequence(n, k) {
    let newArr = [1];
    for (let positionArr = 1; positionArr < n; positionArr++) {
        let start = Math.max(0, positionArr - k);
        let end = positionArr;
        let sum = newArr.slice(start, end);
        let result = 0;
        for(let el of sum){
            result += el;
        }
        newArr[positionArr] = result;
    }
    console.log(newArr.join(` `));
}
lastKNumsSequence(8, 2);