function stringGame(input) {
    let message = input.shift();

    let line = input.shift();
    while (line != `Done`) {
    
        if (line.startsWith(`Change`)) {
            let [text, char, replacement] = line.split(` `);

            while (message.includes(char)) {
                message = message.replace(char, replacement);
            }
            console.log(message);

        } else if (line.startsWith(`Includes`)) {
            let [text, substr] = line.split(` `);
            
            if (message.includes(substr)) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }

        } else if (line.startsWith(`End`)) {
            let [text, substr] = line.split(` `);
            
            if (message.endsWith(substr)) {
                console.log(`True`);
            } else {
                console.log(`False`);
            }
            
        } else if (line.startsWith(`Uppercase`)) {
            message = message.toUpperCase();
            console.log(message);
            
        } else if (line.startsWith(`FindIndex`)) {
            let [text, char] = line.split(` `);
            
            let index = message.indexOf(char);
            console.log(index);

        } else if (line.startsWith(`Cut`)) {
            let [text, startIndex, count] = line.split(` `);

            startIndex = Number(startIndex);
            count = Number(count);
            message = message.substring(startIndex, startIndex + count);      
            console.log(message);
        }

        line = input.shift();
    }
}

// stringGame(["//Th1s 1s my str1ng!//", 
//             "Change 1 i", "Includes string", 
//             "End my", 
//             "Uppercase", 
//             "FindIndex I", 
//             "Cut 5 5", 
//             "Done"]);

stringGame(["*S0ftUni is the B3St Plac3**",

"Change 2 o",

"Includes best",

"End is",

"Uppercase",

"FindIndex P",

"Cut 3 7",

"Done"]);