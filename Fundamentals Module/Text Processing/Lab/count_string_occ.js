function countStrOcc(sentence, word) {
    let splitSentence = sentence.split(` `);
    let count = 0;
    for (const el of splitSentence) {
        if (el == word) {
            count++;
        }
    }
    console.log(count);
}
countStrOcc('This is a word and it also is a sentence',
'is'
);