"use strict";
class Trainer {
    name;
    numberofBadges;
    pokemons;
    constructor(name) {
        this.name = name;
        this.numberofBadges = 0;
        this.pokemons = [];
    }
    addPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }
    getPokemons() {
        return this.pokemons;
    }
}
class Pokemon {
    name;
    element;
    health;
    constructor(name, element, health) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}
const trainers = {};
function recordTrainers(input) {
    let i = 0;
    let trainerLine = input[i];
    while (trainerLine != "Tournament") {
        const [trainerName, pokemonName, element, health] = trainerLine.split(' ');
        const newPokemon = new Pokemon(pokemonName, element, Number(health));
        if (!(trainerName in trainers)) {
            const newTrainer = new Trainer(trainerName);
            trainers[trainerName] = newTrainer;
        }
        const trainer = trainers[trainerName];
        trainer.addPokemon(newPokemon);
        i++;
        trainerLine = input[i];
    }
    elementsIteration(i, input);
    printTrainers();
}
function elementsIteration(i, input) {
    i++;
    let elementLine = input[i];
    while (elementLine != "End") {
        Object.entries(trainers).forEach(trainer => {
            const pokemons = trainer[1].getPokemons();
            let hasElement = false;
            for (const pokemon of pokemons) {
                if (pokemon.element == elementLine) {
                    hasElement = true;
                }
            }
            if (hasElement == true) {
                trainer[1].numberofBadges++;
            }
            else {
                for (const pokemon of pokemons) {
                    pokemon.health -= 10;
                    if (pokemon.health <= 0) {
                        const index = pokemons.indexOf(pokemon);
                        pokemons.splice(index, 1);
                    }
                }
            }
        });
        i++;
        elementLine = input[i];
    }
}
function printTrainers() {
    const sortedTrainers = Object.entries(trainers).sort((a, b) => b[1].numberofBadges - a[1].numberofBadges);
    sortedTrainers.forEach(trainer => {
        const pokemons = trainer[1].getPokemons();
        const pokemonsCount = pokemons.length;
        console.log(`${trainer[0]} ${trainer[1].numberofBadges} ${pokemonsCount}`);
    });
}
recordTrainers(["Sam Blastoise Water 18",
    "Narry Pikachu Electricity 22",
    "John Kadabra Psychic 90",
    "Tournament",
    "Fire",
    "Electricity",
    "Fire",
    "End"]);
//# sourceMappingURL=pokemon.js.map