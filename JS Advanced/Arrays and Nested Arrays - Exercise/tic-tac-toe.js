function ticTacToe(input) {
    let dashboard = [[false, false, false], [false, false, false], [false, false, false]];
    let p1Move = 'X';
    let p2Move = 'O';
    let currPlayer = p1Move;

    for (let i = 0; i < input.length; i++) {
        let [row, index] = input[i].split(` `);
        row = Number(row);
        index = Number(index);

        if (dashboard[row][index] != false) {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }

        if (dashboard[row][index] == false) {
            dashboard[row][index] = currPlayer;
        }

        let potentialWInner = win();

        if (potentialWInner) {
            console.log(`Player ${potentialWInner} wins!`);
            for (const row of dashboard) {
                console.log(row.join(`\t`));
            }
            return;
        }

        if (i >= 8) {
            let falseValue;
            for (let row of dashboard) {
                falseValue = row.find(el => el == false);
            }
            if (!falseValue) {
                console.log(`The game ended! Nobody wins :(`);
                for (const row of dashboard) {
                    console.log(row.join(`\t`));
                }
                return;
            }
        }

        // if (i == input.length - 1) {
            
        //     return;
        // }

        if (currPlayer == p1Move) {
            currPlayer = p2Move;
        }
        else {
            currPlayer = p1Move;
        }
    }

    function win() {
        for (const row of dashboard) {
            const allEqual = arr => arr.every(val => val === arr[0]);
            const result = allEqual(row);
            if (result) {
                if (showWinner(row[0])) {
                    return showWinner(row[0]);
                }
            }
        }

        for (let i = 0; i <= 2; i++) {
            if (dashboard[0][i] == dashboard[1][i]) {
                if (dashboard[0][i] == dashboard[2][i]) {
                    if (showWinner(dashboard[0][i])) {
                        return showWinner(dashboard[0][i]);
                    }
                }
            }
        }

        if (dashboard[0][0] == dashboard[1][1]) {
            if (dashboard[0][0] == dashboard[2][2]) {
                if(showWinner(dashboard[0][0])) {
                    return showWinner(dashboard[0][0]);
                }
            }
        }

        if (dashboard[2][0] == dashboard[1][1]) {
            if (dashboard[2][0] == dashboard[0][2]) {
                if(showWinner(dashboard[2][0])) {
                    return showWinner(dashboard[2][0]);
                }
            }
        }

        function showWinner(text) {
            if (text != false) {
                return text;
            }
        }
    }
}

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"])