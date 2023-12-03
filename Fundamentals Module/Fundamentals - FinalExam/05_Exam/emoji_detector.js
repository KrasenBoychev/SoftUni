function emojiDetector([input]) {
    let pattern = /(?<phrase>(?<sep>[:*])\k<sep>(?<name>[A-Z][a-z]{2}[a-z]*)\k<sep>\k<sep>)/g;

    let validEmojis = [...input.matchAll(pattern)];

    let patternDigits = /\d/g;
    let allDigits = input.match(patternDigits).map(Number);
    let coolThreshold = allDigits.reduce((acc, value) => acc * value);
    
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);

    validEmojis.forEach(element => {
        let emojiName = element.groups.name;
        let value = 0;
        for (const letter of emojiName) {
            value += letter.charCodeAt();
        }
        if (value > coolThreshold) {
            console.log(element.groups.phrase);
        } 
    });
}
///emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);

 //emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);

 emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);