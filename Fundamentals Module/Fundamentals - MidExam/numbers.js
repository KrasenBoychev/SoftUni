function numbers(inputArr) {
    let seqOfNums = inputArr.shift().split(` `);
    let i = 0;
    while (inputArr[i] != `Finish`) {
        let command = inputArr[i].split(` `);
        let action = command[0];
        switch (action) {
            case "Add": add(command[1]);
                break;
            case "Remove": remove(command[1]);
                break;
            case "Replace": replace(command[1], command[2])
                break;
            case "Collapse": collapse(command[1]);
                break;
        }
        i++;

        function add(value) {
            seqOfNums.push(value);
        }

        function remove(value) {
            if (seqOfNums.includes(value)) {
                let index = seqOfNums.indexOf(value);
                seqOfNums.splice(index, 1);
            }
        }

        function replace(value, replacement) {
            if (seqOfNums.includes(value)) {
                let index = seqOfNums.indexOf(value);
                seqOfNums.splice(index, 1, replacement);
            }
        }

        function collapse(value) {
            seqOfNums = seqOfNums.map(Number);
            value = Number(value);
            seqOfNums = seqOfNums.filter(x => x >= value);
        }
    }
    console.log(seqOfNums.join(" "));
}

numbers(["1 20 -1 10",

"Collapse 8",

"Finish"]);