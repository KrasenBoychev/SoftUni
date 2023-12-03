function substring(word, start, count) {
    let end = start + count;
    let result = word.substring(start, end);
    console.log(result);
}
substring('ASentence', 1, 8);