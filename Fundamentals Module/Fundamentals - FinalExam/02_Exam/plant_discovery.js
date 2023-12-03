function plantDiscovery(input) {
    let n = Number(input.shift());
    let allPlants = [];
    let count = 1;
    while (count <= n) {
        let newPlant = input.shift();
        let [plant, rarity] = newPlant.split(`<->`);
        createPlantObj(plant, rarity);
        count++;
    }

    let isValidName;
    let index;
    let newLine = input.shift();
    while (newLine != `Exhibition`) {
        let [action, result] = newLine.split(`: `);
        switch (action) {
            case "Rate": 
                let [plantRate, newRating] = result.split(` - `);
                newRating = Number(newRating);
                if(checkPlantName(plantRate)) {
                    allPlants[index].rating.push(newRating);
                } else {
                    console.log(`error`);
                }
                break;
            case "Update":
                let [plantUpdate, newRarity] = result.split(` - `);
                if(checkPlantName(plantUpdate)) {
                    allPlants[index].rarity = newRarity;
                } else {
                    console.log(`error`);
                }
                break;
            case "Reset":
                let plantReset = result;
                if(checkPlantName(plantReset)) {
                    allPlants[index].rating = [];
                } else {
                    console.log(`error`);
                }
                break;
        }

        newLine = input.shift();
    }

    console.log(`Plants for the exhibition:`);
    allPlants.forEach(el => {
        let averageRating = 0;
        if(el.rating.length > 0) {
            let sum = el.rating.reduce((acc, value) => acc + value);
            averageRating = sum / el.rating.length;
        } 
        console.log(`- ${el.plant}; Rarity: ${el.rarity}; Rating: ${averageRating.toFixed(2)}`);
    });

    function createPlantObj(newPlant, newRarity) {
        let createPlant = {};
        createPlant.plant = newPlant;
        createPlant.rarity = newRarity;
        createPlant.rating = [];
        allPlants.push(createPlant);
    }

    function checkPlantName(name) {
        isValidName = false;
        for(let i = 0; i < allPlants.length; i++) {
            let el = allPlants[i].plant;
            if(el == name) {
                isValidName = true;
                index = i;
            }
            if(isValidName == true) {
                break;
            }
        }
        return isValidName;
    }
}
// plantDiscovery(["3",
//     "Arnoldii<->4",
//     "Woodii<->7",
//     "Welwitschia<->2",
//     "Rate: Woodii - 10",
//     "Rate: Welwitschia - 7",
//     "Rate: Arnoldii - 3",
//     "Rate: Woodii - 5",
//     "Update: Woodii - 5",
//     "Reset: Arnoldii",
//     "Exhibition"]);

plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oah - 7",
"Rate: Canelabra - 6",
"Exhibition"]);