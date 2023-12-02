function hardWord(input) {
    let addWords = input[1];
    let sentence = input[0];
    let splitSentence = sentence.split(` `);

    for (let text of splitSentence) {
        if (text.includes(`_`)) {
            if (!(text.startsWith(`_`))) {
                text = text.slice(1);
            }

            if (!(text.endsWith(`_`))) {
                text = text.slice(0, text.length - 1);
            }
            
            let gapLength = text.length;

            for (let word of addWords) {
                if (word.length == gapLength) {
                    sentence = sentence.replace(text, word);
                }
            }
        }
    }
console.log(sentence);
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);