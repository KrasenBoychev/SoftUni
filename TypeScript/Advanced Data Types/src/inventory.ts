function inventory(heroes: Array<string>) {
    type Hero = {
        name: string,
        level: number,
        items: string
    }
    const result: Array<Hero> = [];

    heroes.forEach(hero => {
        const [name, level, items] = hero.split(` / `);
        const newHero: Hero = {
            name,
            level: Number(level),
            items
        }
        result.push(newHero);
    });

    result.sort((a, b) => a.level - b.level);

    result.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}

inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);
