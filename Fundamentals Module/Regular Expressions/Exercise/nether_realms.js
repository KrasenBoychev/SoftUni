function netherRealms(input) {
    let splitPattern = /[, ]+/g;
    let demonsArr = input.split(splitPattern);

    let demons = {};

    let exludedCharachters = /([^0-9\.\/\+\-\*])/;
    let numberPattern = /([+|-]?[0-9]+\.[0-9]+|[+|-]?[0-9]+)/g;

    for (const demon of demonsArr) {

        let baseDamage = 0;
        let numsMatches = demon.match(numberPattern);
        if (numsMatches) {
            for (const match of numsMatches) {
                baseDamage += Number(match);
            }
        }

        let totalHealth = 0;
        for (let letter of demon) {
            let match = letter.match(exludedCharachters);
            if (match) {
                let codeOfLetter = letter.charCodeAt();
                totalHealth += codeOfLetter;
            }

            if (letter == `*`) {
                baseDamage *= 2;
            }

            if (letter == `/`) {
                baseDamage /= 2;
            }
        }

        demons[demon] = { health: totalHealth, damage: baseDamage.toFixed(2) };
    }

    let sortDemons = Object.entries(demons)
        .sort((a, b) => a[0].localeCompare(b[0]));

    sortDemons.forEach(demon => {
        console.log(`${demon[0]} - ${demon[1].health} health, ${demon[1].damage} damage`);
    });
}

//netherRealms(M3ph-0.5s-0.5t0.0**);

netherRealms(`M3ph1st0**,Azazel`);

//netherRealms(`Gos/ho`);