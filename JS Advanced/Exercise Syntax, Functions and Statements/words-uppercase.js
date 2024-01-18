function wordsUppercase(str) {
    let pattern = /\w+/g;
    let wordsToPrint = [];

    let matches = [...str.matchAll(pattern)];
    let i = 0;
    
    while (matches[i] != undefined) {
        wordsToPrint.push(matches[i][0].toUpperCase());
        i++;
    }

    console.log(wordsToPrint.join(`, `));
}

wordsUppercase('hello');