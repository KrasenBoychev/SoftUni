function calc(firstNum: number, operator: string, secondNum: number): void {
  let result: string = null;

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

calc(
    25.5,

    "",
    
    3
);
