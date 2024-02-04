function playingCards(face, suit) {
    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    let validSuits = {
        S: "\u2660",
        H: "\u2665",
        D: "\u2666",
        C: "\u2663"
    }

    let card = {};
    
    if (validFaces.includes(face)) {
        card[face] = validSuits[suit];
    } else {
        throw new Error(`Error`);
    }

    return card.toString();
}

playingCards('3', 'S');