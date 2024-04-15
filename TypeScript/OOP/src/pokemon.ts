class Trainer {
    private name: string;
    public numberofBadges: number;
    private pokemons: Array<Pokemon>;

    constructor(name: string) {
        this.name = name;
        this.numberofBadges = 0;
        this.pokemons = [];
    }

    addPokemon(pokemon: Pokemon) {
        this.pokemons.push(pokemon);
    }

    getPokemons() {
        return this.pokemons;
    }
}

class Pokemon {
    private name: string;
    public element: string;
    public health: number;

    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }
}

type trainersObj = { [key: string]: Trainer };
const trainers: trainersObj = {};

function recordTrainers(input: Array<string>) {
    let i = 0;
    let trainerLine = input[i];

    while (trainerLine != "Tournament") {
        const [trainerName, pokemonName, element, health] = trainerLine.split(' ');

        const newPokemon = new Pokemon(pokemonName, element, Number(health));

        if (!(trainerName in trainers)) {
            const newTrainer = new Trainer(trainerName)
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

function elementsIteration(i: number, input: Array<string>) {
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

            } else {
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
    
    "End"])

