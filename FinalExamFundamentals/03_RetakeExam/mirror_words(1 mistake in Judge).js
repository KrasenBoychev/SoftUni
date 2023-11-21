function mirrorWords([input]) {
    let patternValidPairs = /[^@#\w\W]*(?<sep>[@#])(?<words>(?<wordOne>[A-Za-z][A-Za-z][A-Za-z]+)\k<sep>*(?<wordTwo>[A-Za-z][A-Za-z][A-Za-z]+))\k<sep>[^@#\w\W]*/g;

    let pairsFound = [...input.matchAll(patternValidPairs)];
    let storeValidPairs = [];
    let mirroredPairsCount = 0;

    for (let i = 0; i < pairsFound.length; i++) {
        let words = pairsFound[i].groups.words;
        let wordOne = pairsFound[i].groups.wordOne;
        let wordTwo = pairsFound[i].groups.wordTwo;
        wordTwoReversed = wordTwo.split(``).reverse().join(``);

        if (words.includes(`##`) || words.includes(`@@`)) {
            if (wordOne == wordTwoReversed) {
                let createPairObj = {};
                createPairObj.one = wordOne;
                createPairObj.two = wordTwo;
                storeValidPairs.push(createPairObj);
                mirroredPairsCount++;
            } else {
                mirroredPairsCount++;
            }
        } 
    }

    if(mirroredPairsCount > 0) {
        console.log(`${mirroredPairsCount} word pairs found!`);
    } else {
        console.log(`No word pairs found!`);
    }

    if(storeValidPairs.length > 0) {
        let result = [];
        for (let el of storeValidPairs) {
            let pair = el.one + ` <=> ` + el.two;
            result.push(pair);
        }
        console.log(`The mirror words are:`);
        console.log(result.join(`, `));
    } else {
        console.log(`No mirror words!`);
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

//mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);

 //mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]);