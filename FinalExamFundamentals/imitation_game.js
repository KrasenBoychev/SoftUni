function imitationGame(input) {
    let message = input.shift();
    let command = input.shift();

    while (command != 'Decode') {
        if (command.includes(`ChangeAll`)) {
            let [text, substr, replacement] = command.split(`|`);
            for (let letter of message) {
                message = message.replace(substr, replacement);
            }
        } else if (command.includes(`Insert`)) {
            let [text, index, value] = command.split(`|`);
            let fisrtHalf = message.substring(0, index);
            fisrtHalf += value;
            let secondHalf = message.substring(index, message.length);
            message = fisrtHalf + secondHalf;
        } else if (command.includes(`Move`)) {
            let [text, num] = command.split(`|`);
            let movingPart = message.substring(0, num);
            let restOfMessage = message.substring(num);
            message = restOfMessage + movingPart;
        }

        command = input.shift();
    }
    console.log(`The decrypted message is:`, message);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);

imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
]);