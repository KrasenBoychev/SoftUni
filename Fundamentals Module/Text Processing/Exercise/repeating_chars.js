function repeatingChars(text) {
    let result = ``;
    let i = 0;

    while (i < text.length) {
        let letter = text[i];
        i++;
  
        while (text[i] == letter) {
            i++;
        }
        result += letter;
    }
    console.log(result);
}
repeatingChars('qqqwerqwecccwd' );