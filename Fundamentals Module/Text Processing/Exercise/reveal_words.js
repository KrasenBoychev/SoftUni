function revealWords(words, sentence) {
    let splitWords = words.split(`, `);
    let splitSentence = sentence.split(` `);

    for (let i = 0; i < splitSentence.length; i++) {
        let el = splitSentence[i];
        if (el.includes(`*`)) {
            let elLength = el.length;

            for (let replacementWord of splitWords) {
                if (replacementWord.length == elLength) {
                    splitSentence[i] = replacementWord;
                }
            }
        }
    }
    console.log(splitSentence.join(` `));
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);