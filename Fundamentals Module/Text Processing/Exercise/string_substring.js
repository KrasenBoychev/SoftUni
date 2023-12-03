function stringSubstring(word, text) {
    text = text.toLowerCase().split(` `);
    let wordLowerCase = word.toLowerCase();

    if (text.includes(wordLowerCase)) {
        console.log(word);
    } else {
        console.log(word, `not found!`);
    }
    
}
stringSubstring('javascript',
'javascript is the best programming javascript language');