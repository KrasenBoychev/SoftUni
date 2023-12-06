function melrahShake(input) {
    let sentence = input.shift();
    let str = input.shift();
    let matchesFound = true;
    if (str.length == 0) {
        matchesFound = false;
    }
    
    while (matchesFound == true) {
        let firstReplacement = sentence.replace(str, ``);
        let index = firstReplacement.lastIndexOf(str);
        if (index == -1) {
            matchesFound = false;
        } else {
            let firstPart = firstReplacement.slice(0, index);
            let secondPart = firstReplacement.slice(index);
            secondPart = secondPart.replace(str, ``);
            let secondReplacement = firstPart + secondPart;
            sentence = secondReplacement;
            console.log(`Shaked it.`);

            let indexSymbol = str.length / 2;
            let leftSide = str.slice(0, indexSymbol);
            let rightSide = str.slice(indexSymbol + 1);
            str = leftSide + rightSide;
            if (str.length == 0) {
                matchesFound = false;
            }
        }
    }
    console.log(`No shake.`);
    console.log(sentence);
}

melrahShake(['astalavista babsay',
'']);

// melrahShake(['##mtm!!mm.mm*mtm.#',
// 'mtm']);