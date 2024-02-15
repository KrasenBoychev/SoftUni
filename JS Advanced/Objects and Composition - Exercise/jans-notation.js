function jansNotation(input) {
    let numsArr = [];
    let sum = 0;

    for (let element of input) {
        if (typeof (element) == 'number') {
            numsArr.push(element);
            continue;
        }
        else {
            switch (element) {
                case "+": sum = numsArr[numsArr.length - 2] + numsArr[numsArr.length - 1];
                    break;
                case "-": sum = numsArr[numsArr.length - 2] - numsArr[numsArr.length - 1];
                    break;
                case "*": sum = numsArr[numsArr.length - 2] * numsArr[numsArr.length - 1];
                    break;
                case "/": sum = numsArr[numsArr.length - 2] / numsArr[numsArr.length - 1];
                    break;
            }

            if (!sum) {
                console.log(`Error: not enough operands!`);
                return;
            }

            numsArr.splice((numsArr.length - 2), 2, sum);
        }
    }

    if (numsArr.length == 1) {
        console.log(sum);
    }
    else {
        console.log(`Error: too many operands!`);
    }
}

jansNotation([
    15,
    '/'
]);