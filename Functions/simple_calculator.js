function simpleCalculator(numOne, numTwo, operator) {
   
    switch (operator) {
        case "multiply": multiply(numOne, numTwo);
            break;
        case "divide": devide(numOne, numTwo);
            break;
        case "add": add(numOne, numTwo);
            break;
        case "subtract": subtract(numOne, numTwo);
            break;
    }

    function multiply(numOne, numTwo) {
        console.log(numOne * numTwo); 
    }
    
    function devide(numOne, numTwo) {
        console.log(numOne / numTwo);
    }

    function add(numOne, numTwo) {
        console.log(numOne + numTwo);
    }

    function subtract(numOne, numTwo) {
        console.log(numOne - numTwo);
    }
}
simpleCalculator(12, 19, "subtract")