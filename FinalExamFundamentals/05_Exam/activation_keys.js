function activationKeys(input) {
    let key = input.shift();
    
    let command = input.shift();
    while (command != `Generate`) {
        if(command.startsWith(`Contains`)) {
            let [text, substr] = command.split(`>>>`);
            if(key.includes(substr)) {
                console.log(`${key} contains ${substr}`);
            } else {
                console.log(`Substring not found!`);
            }

        } else if(command.startsWith(`Flip`)) {
            let [text, upOrLow, startIdx, endIdx] = command.split(`>>>`);
            startIdx = Number(startIdx);
            endIdx = Number(endIdx);
            let substr = key.substring(startIdx, endIdx);
            let newSubstr;
            if(upOrLow == `Upper`) {
                newSubstr = substr.toUpperCase(substr);
            } else if (upOrLow == `Lower`) {
                newSubstr = substr.toLowerCase(substr);
            }
            key = key.replace(substr, newSubstr);
            console.log(key);

        } else if(command.startsWith(`Slice`)) {
            let [text, startIdx, endIdx] = command.split(`>>>`);
            startIdx = Number(startIdx);
            endIdx = Number(endIdx);
            let substr = key.substring(startIdx, endIdx);
            let replacement = ``;
            key = key.replace(substr, replacement);
            console.log(key);
        }

        command = input.shift();
    }
    console.log(`Your activation key is: ${key}`);
}
// activationKeys(["abcdefghijklmnopqrstuvwxyz",
// "Slice>>>2>>>6",
// "Flip>>>Upper>>>3>>>14",
// "Flip>>>Lower>>>5>>>7",
// "Contains>>>def",
// "Contains>>>deF",
// "Generate"]);

activationKeys(["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"]);