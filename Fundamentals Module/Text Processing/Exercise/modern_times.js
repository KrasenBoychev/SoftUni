function modernTimes(sentence) {
    let splitSentence = sentence.split(` `);
    for (let word of splitSentence) {
        if (word.includes(`#`) && word.length > 1) {
            let symbols = word.slice(1);

            let isValid = true;
            for (let char of symbols) {
                if (!(char >= "a" && char <= "z") && !(char >= "A" && char <= "Z")) {
                    isValid = false;
                }
            }

            if (isValid == true) {
                console.log(symbols);
            }
        }
    }
}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');