function pirates(input) {
    let command = input.shift();
    let cities = {};
    while(command != `Sail`) {
        let [newCity, newPopulation, newGold] = command.split(`||`);

        if(newCity in cities) {
            cities[newCity].population += Number(newPopulation);
            cities[newCity].gold += Number(newGold);
        } else {
            cities[newCity] = {population: Number(newPopulation), gold: Number(newGold)};
        }
       
        command = input.shift();
    }

    let newLine = input.shift();
    while(newLine != `End`) {
        if(newLine.startsWith(`Plunder`)) {
            let [text, town, people, gold] = newLine.split(`=>`);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            let peopleLeft = cities[town].population - Number(people);
            let goldLeft = cities[town].gold - Number(gold);
            if(peopleLeft == 0 || goldLeft == 0) {
                console.log(`${town} has been wiped off the map!`);
                delete cities[town];
            } else {
                cities[town].population = peopleLeft;
                cities[town].gold = goldLeft;
            }

        } else if(newLine.startsWith(`Prosper`)) {
            let [text, town, gold] = newLine.split(`=>`);
            gold = Number(gold);
            if(gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                cities[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cities[town].gold} gold.`);
            }
        }

        newLine = input.shift();
    }

    let entries = Object.entries(cities);
    if(entries.length > 0) {
        console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
        entries.forEach(element => {
            let values = Object.values(element[1]);
            console.log(`${element[0]} -> Population: ${values[0]} citizens, Gold: ${values[1]} kg`);
        });
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);

// pirates(["Nassau||95000||1000",
// "San Juan||930000||1250",
// "Campeche||270000||690",
// "Port Royal||320000||1000",
// "Port Royal||100000||2000",
// "Sail",
// "Prosper=>Port Royal=>-200",
// "Plunder=>Nassau=>94000=>750",
// "Plunder=>Nassau=>1000=>150",
// "Plunder=>Campeche=>150000=>690",
// "End"]);