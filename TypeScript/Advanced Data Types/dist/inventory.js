"use strict";
function inventory(heroes) {
    const result = [];
    heroes.forEach(hero => {
        const [name, level, items] = hero.split(` / `);
        const newHero = {
            name,
            level: Number(level),
            items
        };
        result.push(newHero);
    });
    result.sort((a, b) => a.level - b.level);
    result.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
//# sourceMappingURL=inventory.js.map