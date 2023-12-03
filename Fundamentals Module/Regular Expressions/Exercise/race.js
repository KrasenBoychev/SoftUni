function race(input) {

    let lettersPattern = /[a-z]/gi;
    let kmPattern = /\d/g;
    let racers = {};

    let names = input.shift().split(`, `);
    names.forEach(element => {
        racers[element] = 0;
    });

    let command = input.shift();
    while (command != 'end of race') {

        let name = command.match(lettersPattern);
        name = name.join(``);

        if (name in racers) {
            let digits = command.match(kmPattern);
            let km = digits.map(Number).reduce((acc, value) => acc + value);
            
            racers[name] += km;
        }
        command = input.shift();
    }

    let entries = Object.entries(racers);

    let sorted = entries.sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);

// race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
// 'Mi*&^%$ch123o!#$%#nne787) ',
// '%$$B(*&&)i89ll)*&) ',
// 'R**(on%^&ald992) ',
// 'T(*^^%immy77) ',
// 'Ma10**$#g0g0g0i0e',
// 'end of race']);