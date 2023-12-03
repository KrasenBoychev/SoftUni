function heroes(input) {
    let n = Number(input.shift());
    let storeHeroes = [];

    let count = 1;
    while (count <= n) {
        let [name, hp, mp] = input.shift().split(` `);
        let createHero = {};
        createHero.name = name;
        createHero.hp = Number(hp);
        createHero.mp = Number(mp);
        storeHeroes.push(createHero);
        count++;
    }

    let newLine = input.shift();
    while (newLine != "End") {
        if (newLine.startsWith(`CastSpell`)) {
            let [text, heroName, mpNeeded, spellName] = newLine.split(` - `);
            mpNeeded = Number(mpNeeded);
            for (let el of storeHeroes) {
                if (el.name == heroName) {
                    if (el.mp >= mpNeeded) {
                        el.mp = el.mp - mpNeeded;
                        console.log(`${heroName} has successfully cast ${spellName} and now has ${el.mp} MP!`);
                    } else {
                        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                    }
                }
            }

        } else if (newLine.startsWith(`TakeDamage`)) {
            let [text, heroName, damage, attacker] = newLine.split(` - `);
            damage = Number(damage);
            for (let i = 0; i < storeHeroes.length; i++) {
                let el = storeHeroes[i];
                if (el.name == heroName) {
                    el.hp -= damage;
                    if (el.hp <= 0) {
                        storeHeroes.splice(i, 1);
                        console.log(`${heroName} has been killed by ${attacker}!`);
                    } else {
                        console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${el.hp} HP left!`);
                    }
                }
            }

        } else if (newLine.startsWith(`Recharge`)) {
            let [text, heroName, amount] = newLine.split(` - `);
            amount = Number(amount);
            for (let el of storeHeroes) {
                if (el.name == heroName) {
                    let totalMp = el.mp + amount;
                    let amountRecovered = 0;
                    if (totalMp > 200) {
                        amountRecovered = 200 - el.mp;
                        el.mp = 200;
                    } else {
                        amountRecovered = amount;
                        el.mp = totalMp;
                    }
                    console.log(`${heroName} recharged for ${amountRecovered} MP!`);
                }
            }

        } else if (newLine.startsWith(`Heal`)) {
            let [text, heroName, amount] = newLine.split(` - `);
            amount = Number(amount);
            for (let el of storeHeroes) {
                if (el.name == heroName) {
                    let totalHp = el.hp + amount;
                    let amountRecovered = 0;
                    if (totalHp > 100) {
                        amountRecovered = 100 - el.hp;
                        el.hp = 100;
                    } else {
                        amountRecovered = amount;
                        el.hp = totalHp;
                    }
                    console.log(`${heroName} healed for ${amountRecovered} HP!`);
                }
            }

        }

        newLine = input.shift();
    }

    storeHeroes.forEach(el => {
        console.log(el.name);
        console.log(`  HP: ${el.hp}`);
        console.log(`  MP: ${el.mp}`);
    });
}
// heroes([
//     "2",
//     "Solmyr 85 120",
//     "Kyrre 99 50",
//     "Heal - Solmyr - 10",
//     "Recharge - Solmyr - 50",
//     "TakeDamage - Kyrre - 66 - Orc",
//     "CastSpell - Kyrre - 15 - ViewEarth",
//     "End"
// ]);

heroes([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
    ]);

