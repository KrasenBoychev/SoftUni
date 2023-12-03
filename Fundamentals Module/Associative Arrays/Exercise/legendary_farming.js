function legendaryFarming(input) {
    let storeJunkMaterials = {};
    let winner;

    let keyMaterials = [`shards`, `fragments`, `motes`];
    let items = [`Shadowmourne`, `Valanyr`, `Dragonwrath`];
    let storeItems = {};
    let index = 0;
    for (const material of keyMaterials) {
        storeItems[material] = {item: items[index], qty: 0};
        index++;
    }

    let splitInput = input.split(` `);
    for (let i = 0; i < splitInput.length; i += 2) {
        let qty = Number(splitInput[i]);
        let material = splitInput[i + 1].toLowerCase();
        
        if (material in storeItems) {
            storeItems[material].qty += qty;

            if (storeItems[material].qty >= 250) {
                storeItems[material].qty -= 250;
                winner = storeItems[material].item;
                break;
            }
            
        } else {
            if (material in storeJunkMaterials) {
                storeJunkMaterials[material] += qty;
            } else {
                storeJunkMaterials[material] = qty;
            }
        }
    }
    
    console.log(`${winner} obtained!`);

    let keyMaterialsEntries = Object.entries(storeItems);
    let sortedKeyMaterials = keyMaterialsEntries.sort((a, b) => b[1].qty - a[1].qty || a[0].localeCompare(b[0]));
    sortedKeyMaterials.forEach(element => {
        console.log(`${element[0]}: ${element[1].qty}`);
    });

    let junkMaterialsEntries = Object.entries(storeJunkMaterials);
    let sortedJunkMaterials = junkMaterialsEntries.sort((a, b) => a[0].localeCompare(b[0]));
    sortedJunkMaterials.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

//legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');