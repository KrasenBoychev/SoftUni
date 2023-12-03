function pascalScaleSplitter(text) {
    let allWords = [];
    let word = ``;

    for (let letter of text) {
        if (letter >= "A" && letter <= "Z") {
            if (word.length > 0) {
                allWords.push(word);
            }
            word = letter;
        } else {
            word += letter;
        }
    }
    allWords.push(word);
    console.log(allWords.join(`, `));
}
pascalScaleSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');

// (char >= "A" && char <= "Z")