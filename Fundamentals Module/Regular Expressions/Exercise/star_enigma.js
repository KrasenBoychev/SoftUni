function starEnigma(input) {
    let messages = Number(input.shift());
    let specialLetters = [`s`, `S`, `t`, `T`, `a`, `A`, `r`, `R`];
    let pattern = /(?<planet>@[a-zA-Z]+)[^@\-!:]*(?<population>:[0-9]+)[^@\-!:]*(?<attack>![AD]!)[^@\-!:]*(?<soldierCount>->[0-9]+)/;
    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let i = 0; i < messages; i++) {
        let message = input[i];
        let countSpecialLetters = 0;

        for (const letter of message) {
            if (specialLetters.includes(letter)) {
                countSpecialLetters++;
            }
        }

        let newMessage = ``;
        for (const letter of message) {
            let newLetter = (letter.charCodeAt() - countSpecialLetters);
            newMessage += String.fromCharCode(newLetter);
        }

        let match = newMessage.match(pattern);
        if (match) {
            let attackType = match.groups.attack;
            let planetName = match.groups.planet;
            planetName = planetName.slice(1);
            if (attackType == `!A!`) {
                attackedPlanets.push(planetName);
            } else if (attackType == `!D!`) {
                destroyedPlanets.push(planetName);
            }
        }
    }

    let sortedAttackedPlanets = attackedPlanets.sort((a, b) => a.localeCompare(b));
    let sortedDestroyedPlanets = destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    sortedAttackedPlanets.forEach(planet => {
        console.log(`-> ${planet}`);
    });

    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    sortedDestroyedPlanets.forEach(planet => {
        console.log(`-> ${planet}`);
    });
}

// starEnigma(['2',
//     'STCDoghudd4=63333$D$0A53333',
//     'EHfsytsnhf?8555&I&2C9555SR']);

starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);