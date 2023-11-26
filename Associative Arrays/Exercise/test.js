let result = [];

for (let index = 1; index <= 2; index++) {
    let person = {};

    if(index == 1) {
        let nameK = `Krasen`;
        let age = 26;
        let hair = `brown`;
        let color = `white`;
        let body = `long`;
        
        person.name = nameK;
        person[age] = hair;
        person[color] = body;

    } else {
        let nameA = `Nelina`;
        let ageA = 22;
        let hairA = `orange`;
        let colorA = `black`;
        let bodyA = `short`;
        
        person.name = nameA;
        person[ageA] = hairA;
        person[colorA] = bodyA;
    }

    result.push(person);
    
}


if(result[0].name == `Krasen`) {
    result[0][`arms`] = `legs`;
} else {
    console.log(`error`);
}

let pigs = {};
pigs[`Mare`] = {};
pigs[`Mare`][`color`] = `brown`;
console.log(Object.entries(pigs[`Mare`])[0]);

// For more info check exercise: `arena_tier.js` at the same folder!