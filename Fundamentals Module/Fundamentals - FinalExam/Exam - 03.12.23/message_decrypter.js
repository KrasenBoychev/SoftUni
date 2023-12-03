function messageDecrypter(input) {
    let inputsCount = Number(input.shift());
    let pattern = /([$|%])(?<tag>[A-Z][a-z]{2,})\1: (?<nums>(\[\d+\]\|){3})/;
    
     for (let i = 0; i < inputsCount; i++) {
        let message = input[i];
        let messagePattern = message.match(pattern);
        let isMessageValid = true;

        if(messagePattern) {
            
            if (message == messagePattern[0]) {
                let numsStr = messagePattern.groups.nums;
                numsStr = numsStr.slice(0, numsStr.length - 1).split(`|`);
                let decryptedMessage = ``;

                for (let el of numsStr) {
                    let num = el.slice(1, el.length - 1);
                    num = Number(num);
                    decryptedMessage += String.fromCharCode(num);
                }
                
                let tag = messagePattern.groups.tag;
                console.log(`${tag}: ${decryptedMessage}`);
                
            } else {
                isMessageValid = false;
            }

        } else {
            isMessageValid = false;
        }

        if (isMessageValid == false) {
            console.log(`Valid message not found!`);
        }

     }
    
}

// messageDecrypter(["4", 
//                   "$Request$: [73]|[115]|[105]|", 
//                   "%Taggy$: [73]|[73]|[73]|", 
//                   "%Taggy%: [118]|[97]|[108]|", 
//                   "$Request$: [73]|[115]|[105]|[32]|[75]|"]);

messageDecrypter(["3",
                  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
                  "$tAGged$: [97][97][97]|",
                  "$Request$: [73]|[115]|[105]|true"]);