function calc(firstNum, operator, secondNum) {
    let result = null;
    switch (operator) {
        case "+":
            result = (firstNum + secondNum).toFixed(2);
            break;
        case "-":
            result = (firstNum - secondNum).toFixed(2);
            break;
        case "*":
            result = (firstNum * secondNum).toFixed(2);
            break;
        case "/":
            result = (firstNum / secondNum).toFixed(2);
            break;
        default:
            result = `Invalid operator`;
            break;
    }
    console.log(result);
}
calc(25.5, "", 3);
//# sourceMappingURL=calculator.js.map