function perfectNumber(inputNum) {

    if(inputNum <= 0){
        console.log(`It's not so perfect.`);
    } else {
        checkNumber(inputNum);
    }

    function checkNumber(inputNum) {
        let sum = 0;
        for (let i = inputNum - 1; i > 0; i--) {
            if (inputNum % i == 0) {
                sum += i;
            }
        }

        if (sum == inputNum) {
            console.log(`We have a perfect number!`);
        } else {
            console.log(`It's not so perfect.`);
        }
    }
}
perfectNumber(6);