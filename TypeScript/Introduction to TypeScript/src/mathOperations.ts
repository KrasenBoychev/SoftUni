function mathOperations(a: number, b: number, operator: string): number {
    let result: number = 0;

    switch (operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
    }

    return result;
}

console.log((mathOperations(3, 5.5, '*')));