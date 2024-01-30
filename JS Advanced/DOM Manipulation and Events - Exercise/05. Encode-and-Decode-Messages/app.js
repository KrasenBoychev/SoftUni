function encodeAndDecodeMessages() {
    let buttons = Array.from(document.querySelectorAll('button'));
    let textAreas = Array.from(document.querySelectorAll('textarea'));
    let typedMessage = textAreas[0];
    let receivedMessage = textAreas[1];

    for (const btn of buttons) {
        btn.addEventListener('click', action);
    }

    function action(event) {
        let actionType = event.target;

        if (actionType.textContent == "Encode and send it") {
            let typedMessageValue = typedMessage.value;

            if (typedMessageValue.length > 0) {
                let newMessage = '';

                for (let symbol of typedMessageValue) {
                    let asciiSymbol = symbol.charCodeAt() + 1;
                    newMessage += String.fromCharCode(asciiSymbol);
                }

                receivedMessage.value = newMessage;
                typedMessage.value = '';
            }
        }

        if (actionType.textContent == "Decode and read it") {
            let receivedMessageValue = receivedMessage.value;
            let newMessage = '';

            for (let symbol of receivedMessageValue) {
                let asciiSymbol = symbol.charCodeAt() - 1;
                newMessage += String.fromCharCode(asciiSymbol);
            }

            receivedMessage.value = newMessage;
        }

    }
}




// The password for my bank account is 123pass32