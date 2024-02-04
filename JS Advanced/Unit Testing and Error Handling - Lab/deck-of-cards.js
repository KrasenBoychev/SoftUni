function printDeckOfCards(input) {
    let result = [];

    for (const card of input) {
        let face = card.slice(0, card.length - 1);
        let suit = card.slice(card.length - 1);
        let newCard = createCard(face, suit);
        
        if (newCard == -1) {
            return;
        }
        result.push(newCard);
    }

    console.log(result.join(` `));

    function createCard (face, suit) {
        let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let validSuits = {
            S: "\u2660",
            H: "\u2665",
            D: "\u2666",
            C: "\u2663"
        }
    
        let card = {};
        
        if (validFaces.includes(face) || !(suit in validSuits)) {
            card[face] = validSuits[suit];
        } else {
            console.log(`Invalid card: ${face}${suit}`);
            return -1;
        }
    
        let entries = Object.entries(card)[0];
        return `${entries[0]}${entries[1]}`;
    }

}

printDeckOfCards(['5S', '3D', 'QD', '1C']);