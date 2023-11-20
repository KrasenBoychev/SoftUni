function destinationMapper(input) {
    let lettersPattern = /[^=\/\w]*(?<sep>[=\/])(?<name>[A-Z][A-Za-z][A-Za-z]+)\k<sep>/g;
    
    let results = [...input.matchAll(lettersPattern)];
    let totalPoints = 0;
    let destinations = [];

    for (let i = 0; i < results.length; i++) {
        let destination = results[i].groups.name;
        let symbols = destination.length;
        totalPoints += symbols;
        destinations.push(destination);
    }
    
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${totalPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");

destinationMapper("ThisIs some InvalidInput");