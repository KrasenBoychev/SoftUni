function charactersInRange(inputOne, inputTwo) {
    let inputOneToNum = inputOne.charCodeAt(0);
    let inputTwoToNum = inputTwo.charCodeAt(0);
    
    if (inputOneToNum > inputTwoToNum) {
        loop (inputTwoToNum, inputOneToNum);
    } else {
        loop (inputOneToNum, inputTwoToNum)
    }

    function loop(a, b) {
        let resultArr = [];
        for (let i = a + 1; i < b; i++) {
            let numToString = String.fromCharCode(i);
            resultArr.push(numToString);
        }
        console.log(resultArr.join(" "));
    }
}
charactersInRange('C',
'#')