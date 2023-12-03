function numberModification(inputNum){
    let average = 0;
    inputNum = String(inputNum);

    while(average <= 5){
        calcAverage(inputNum);
        if(average <= 5){
            inputNum += `9`;
        } else {
            break;
        }
    }
    console.log(inputNum);

    function calcAverage(inputNum){
    let sum = 0;
    for(let i = 0; i < inputNum.length; i++){

        sum += Number(inputNum[i]);
    }
    average = sum / inputNum.length;
    return average;
    }
}
numberModification(5835);