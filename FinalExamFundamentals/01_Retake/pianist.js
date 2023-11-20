function pianist(input) {
    let piecesCount = Number(input.shift());
    let storePieces = [];

    let count = 1;
    while (count <= piecesCount) {
        let [piece, composer, key] = input.shift().split(`|`);
        createObj(piece, composer, key);
        count++;
    }

    let isPieceIntheList = false;
    let index = 0;

    let newLine = input.shift();
    while (newLine != `Stop`) {
        if (newLine.startsWith(`Add`)) {
            add(newLine);
        } else if (newLine.startsWith(`Remove`)) {
            remove(newLine);
        } else if (newLine.startsWith(`ChangeKey`)) {
            change(newLine);
        }

        newLine = input.shift();

        function add(command) {
            let [text, currPiece, composer, key] = command.split(`|`);
            checkIfPieceIsInTheList(currPiece);
            
            if (isPieceIntheList == false) {
                createObj(currPiece, composer, key);
                console.log(`${currPiece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${currPiece} is already in the collection!`);
            }
        }

        function remove(command) {
            let [text, currPiece] = command.split(`|`);
            checkIfPieceIsInTheList(currPiece);

            if (isPieceIntheList == true) {
                storePieces.splice(index, 1);
                console.log(`Successfully removed ${currPiece}!`);
            } else {
                console.log(`Invalid operation! ${currPiece} does not exist in the collection.`);
            }
        }

        function change(command) {
            let [text, currPiece, newKey] = command.split(`|`);
            
            checkIfPieceIsInTheList(currPiece);

            
            if (isPieceIntheList == true) {
                storePieces[index].key = newKey;
                console.log(`Changed the key of ${currPiece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${currPiece} does not exist in the collection.`);
            }
        }
    }

    function createObj(piece, composer, key) {
        let allPieces = {};
        allPieces.piece = piece;
        allPieces.composer = composer;
        allPieces.key = key;
        storePieces.push(allPieces);
    }

    function checkIfPieceIsInTheList(currPiece) {
        isPieceIntheList = false;
        for (let i = 0; i < storePieces.length; i++) {
            let element = storePieces[i];
            if (element.piece == currPiece) {
                isPieceIntheList = true;
                index = i;
            }
            if (isPieceIntheList == true) {
                break;
            }
        }
    }

    storePieces.forEach(element => {
        console.log(`${element.piece} -> Composer: ${element.composer}, Key: ${element.key}`);
    });
}
// pianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);

pianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);