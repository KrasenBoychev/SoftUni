function secretChat(input) {
    let message = input.shift();

    let newLine = input.shift();
    while(newLine != `Reveal`) {
        if(newLine.startsWith(`InsertSpace`)) {
            let [text, index] = newLine.split(`:|:`);
            insert(index);
            console.log(message);
        } else if(newLine.startsWith(`Reverse`)) {
            let [text, substr] = newLine.split(`:|:`);
            if(reverse(substr) == true) {
                console.log(message);
            } else {
                console.log(`error`);
            }
        } else if(newLine.startsWith(`ChangeAll`)) {
            let [text, substr, replacement] = newLine.split(`:|:`);
            changeAll(substr, replacement);
            console.log(message);
        }

        newLine = input.shift(); 
    }

    console.log(`You have a new text message: ${message}`);

    function insert(num) {
        let firstHalf = message.substring(0, num);
        let newHalf = firstHalf + ` `;
        message = message.replace(firstHalf, newHalf);
    }

    function reverse(str) {
        if(message.includes(str)) {
            let startIndex = message.indexOf(str);
            let endIndex = startIndex + str.length;
            let firstHalf = message.substring(0, startIndex);
            let secondHalf = message.substring(endIndex, message.length);
            str = str.split("").reverse().join("");
            message = firstHalf + secondHalf + str;
        }
        return message.includes(str);
    }

    function changeAll(str, rep) {
        for (let el of message) {
            message = message.replace(str, rep);
        }
    }
}


secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);


// secretChat([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal'
//   ]);