function memoryGame(integers) {
    let seqOfElements = integers
        .shift()
        .split(" ");

    let moves = 0;
    let i = 0;
    while (integers[i] != "end") {
        let command = integers[i].split(" ").map(Number);
        moves++;
        if (command[0] == command[1] || command[0] < 0 || command[1] < 0 || command[0] >= seqOfElements.length || command[1] >= seqOfElements.length) {
            addItems();
        } else {
            if (seqOfElements[command[0]] == seqOfElements[command[1]]) {
                console.log(`Congrats! You have found matching elements - ${seqOfElements[command[0]]}!`);
                seqOfElements = seqOfElements.filter(x => x != seqOfElements[command[0]]);
            } else {
                console.log(`Try again!`);
            }
        }
        if (seqOfElements == 0) {
            break;
        }
        i++;
    }

    if (seqOfElements.length > 0) {
        console.log(`Sorry you lose :(`);
        console.log(`${seqOfElements.join(" ")}`);
    } else {
        console.log(`You have won in ${moves} turns!`);
    }
    

    function addItems() {
        let start = seqOfElements.length / 2;
        let str = "-" + moves + "a";
        seqOfElements.splice(start, 0, str, str);
        console.log(`Invalid input! Adding additional elements to the board`);
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
"1 0",
"-1 0",
"1 0", 
"1 0", 
"1 0", 
"end"
    ]);