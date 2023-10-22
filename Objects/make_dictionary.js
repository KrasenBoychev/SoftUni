function makeDictionary(list) {
    let objectArr = [];
    
    list.forEach(element => {
        let elToObject = JSON.parse(element);
        let term = Object.keys(elToObject)[0];
        let definition = Object.values(elToObject)[0];
        let allTerms = {
            term,
            definition,
        }; 
        let termName = objectArr.find(el => el.term === term);
        if (termName) {
            termName.definition = definition;
        } else {
            objectArr.push(allTerms);
        }
    });

    objectArr.sort((a,b) => a.term.localeCompare(b.term));
    objectArr.forEach(product => {
        console.log(`Term: ${product.term} => Definition: ${product.definition}`);
    });
}
makeDictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);