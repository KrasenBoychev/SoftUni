function postOffice([input]) {
    let firstPattern = /([\#|\$|\%|\&\*])(?<letters>[A-Z]+)\1/g;
    let secondPattern = /(?<asciiCode>\d{2}):(?<wordLength>\d{2})/g;

    let [firstPart, secondPart, thirdPart] = input.split(`|`);
    let capitalLetters = firstPattern.exec(firstPart).groups.letters;
    capitalLetters = capitalLetters.split(``);

    let secondPartMatch = secondPattern.exec(secondPart);

    while (secondPartMatch != null) {
        let asciiCode = secondPartMatch.groups.asciiCode;
        let wordLength = Number(secondPartMatch.groups.wordLength);
        let asciiCodeToLetter = String.fromCharCode(asciiCode);

        for (let i = 0; i < capitalLetters.length; i++) {
            let letter = capitalLetters[i];

            if (letter == asciiCodeToLetter) {
                capitalLetters[i] += `_`.repeat(wordLength);
            }
        }

        secondPartMatch = secondPattern.exec(secondPart);
    }

    thirdPart = thirdPart.split(` `);

    for (let word of capitalLetters) {
        let capitalLetter = word[0];
        
        for (let str of thirdPart) {
            let startingLetter = str[0];

            if (startingLetter == capitalLetter && str.length == word.length) {
                console.log(str);
            }

        }
    }
}

//postOffice([`sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos`]);

postOffice([`Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig`]);