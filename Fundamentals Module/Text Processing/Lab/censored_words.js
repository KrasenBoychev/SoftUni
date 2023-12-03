function censoredWords(sentence, word) {
    let repeatStars = `*`.repeat(word.length);

    while (sentence.includes(word)) {
        sentence = sentence.replace(word, repeatStars);
    }

    console.log(sentence);
}
censoredWords('A small sentence with some words small',
'small');