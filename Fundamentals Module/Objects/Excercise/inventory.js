function inventory(list) {
    let heroesInfo = [];

    list.forEach(command => {
        let [name, level, items] = command.split(` / `);
        let currentHero = {
            name,
            level: Number(level),
            items,
        }
        heroesInfo.push(currentHero);
    });

    heroesInfo.sort((a,b) => a.level - b.level);

    heroesInfo.forEach(eachHero => {
        console.log(`Hero: ${eachHero.name}`);
        console.log(`level => ${eachHero.level}`);
        console.log(`items => ${eachHero.items}`);
    });
} 
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);