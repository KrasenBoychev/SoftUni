function jansNotation(instructionsInputArr) {
    let calcArr = [];
    let isValid = true;

    for (let i = 0; i < instructionsInputArr.length; i++) {
        let el = instructionsInputArr[i];

        if (el == Number(el)) {
            calcArr.push(el);
        } else {
            let lastTwoEl = calcArr.slice(calcArr.length - 2);
            if (lastTwoEl[0] == Number(lastTwoEl[0]) && lastTwoEl[1] == Number(lastTwoEl[1])) { //if there are more than 2 nums before the operator
                calcArr = calcOperation(lastTwoEl[0], lastTwoEl[1], el, calcArr);
            } else { //if there is no or one num before the operator
                isValid = false;
            }
        }
    }

    if (isValid == false) {
        console.log(`Error: not enough operands!`);
    } else if (calcArr.length > 1) {
        console.log(`Error: too many operands!`);
    } else {
        console.log(calcArr.join(""));
    }

    function calcOperation(firstNum, secondNum, sign, array) {
        let resultNum = 0;
        switch (sign) {
            case "+": resultNum = firstNum + secondNum;
                break;
            case "-": resultNum = firstNum - secondNum;
                break;
            case "*": resultNum = firstNum * secondNum;
                break;
            case "/": resultNum = firstNum / secondNum;
                break;
        }
        let firstRemovedEl = array.length - 2;
        array.splice(firstRemovedEl, 2, resultNum);
        return array;
    }
}
jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
    );