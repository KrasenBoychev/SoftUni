function passwordReset(input) {
    let str = input.shift();

    let newLine = input.shift();
    while(newLine != `Done`) {
        if(newLine == `TakeOdd`) {
            let newStr = ``;
            for (let i = 1; i < str.length; i += 2) {
                let letter = str[i];
                newStr += letter; 
            }
            str = newStr;
            console.log(str);

        } else if(newLine.startsWith(`Cut`)) {
            let [text, index, length] = newLine.split(` `);
            index = Number(index);
            let end = Number(index) + Number(length);
            let substr = str.substring(index, end);
            str = str.replace(substr, ``);
            console.log(str);

        } else if(newLine.startsWith(`Substitute`)) {
            let [text, substr, substitute] = newLine.split(` `);
            let countMatches = 0;
            while(str.includes(substr) == true) {
                str = str.replace(substr, substitute);
                countMatches++;
            }

            if(countMatches == 0) {
                console.log(`Nothing to replace!`);
            } else {
                console.log(str);
            }
        }

        newLine = input.shift();
    }

    console.log(`Your password is: ${str}`);
}
// passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
// "TakeOdd",
// "Cut 15 3",
// "Substitute :: -",
// "Substitute | ^",
// "Done"]);

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);