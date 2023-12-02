function letterChangeNums(input) {
    input = input.trim();
    let allCodes = [];
    let code = ``;
    
    while (input.length > 0) {
        let letter = input[0];
        if (letter != ` `) {
            code += letter;
            input = input.replace(letter, ``);
        } else {
            allCodes.push(code);
            code = ``;
            input = input.trim();
        }   
    }
    allCodes.push(code);

    let totalSum = 0;
    
    for (let code of allCodes) {

        let currSum = 0;
        let firstLetter = code[0].charCodeAt();
        let numInCode = code.substring(1, code.length - 1);
        numInCode = Number(numInCode);

        if (firstLetter < 91) {
            currSum = numInCode / (firstLetter - 64);
        } else {
            currSum = numInCode * (firstLetter - 96);
        }

        let lastLetter = code[code.length - 1].charCodeAt();
        
        if (lastLetter < 91) {
            currSum -= (lastLetter - 64);
        } else {
            currSum += (lastLetter - 96);
        }
        
        totalSum += currSum;
    }
    console.log(totalSum.toFixed(2));
}

letterChangeNums('A12b s17G');

letterChangeNums('P34562Z   q2576f      H456z');

letterChangeNums('a1A');