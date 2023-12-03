function valueString(input) {
    let sentence = input.shift();
    let commandType = input.shift();

    let startNum = 0;
    let endNum = 0;
    if (commandType == `LOWERCASE`) {
        startNum = 97;
        endNum = 122;
    } else if (commandType == `UPPERCASE`) {
        startNum = 65;
        endNum = 90;
    }

    let sum = 0;

    for (let letter of sentence) {
        let codeOfLetter = letter.charCodeAt();
        
        if (codeOfLetter >= startNum && codeOfLetter <= endNum) {
            sum += codeOfLetter;
        }
    }
    console.log(`The total sum is: ${sum}`);
}

valueString(['HelloFromMyAwesomePROGRAM',
'LOWERCASE']);

valueString(['AC/DC',
'UPPERCASE']);