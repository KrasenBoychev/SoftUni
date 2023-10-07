function negativePositiveNums(inputArr) {
    let resultArr = [];
    for(let i = 0; i < inputArr.length; i++){
        if(inputArr[i] < 0){
            resultArr.unshift(inputArr[i]);
        } else {
            resultArr.push(inputArr[i]);
        }
    }
    console.log(resultArr.join("\n"));
}
negativePositiveNums(['7', '-2', '8', '9']);