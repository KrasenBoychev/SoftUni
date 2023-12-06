function treasureFinder(input) {
    let keys = input.shift().split(` `).map(Number);
    
    let line = input.shift();
    while (line != `find`) {
        let message = ``;
        let keyIndex = 0;

        for (let i = 0; i < line.length; i++) {
            let symbolCode = line[i].charCodeAt();

            let keyNum = keys[keyIndex];
            keyIndex++;
            if (keyIndex == keys.length) {
                keyIndex = 0;
            }

            message += String.fromCharCode(symbolCode - keyNum);
        }

        let type = message.split(`&`)[1];
        let leftArrow = message.indexOf(`<`);
        let rightArrow = message.indexOf(`>`);
        let coordinates = message.substring(leftArrow + 1, rightArrow);
        
        console.log(`Found ${type} at ${coordinates}`);
        line = input.shift();
    }
}

// treasureFinder(["1 2 1 3",
// "ikegfp'jpne)bv=41P83X@",
// "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
// "find"]);

treasureFinder(["1 4 2 5 3 2 1",
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
"find"]);