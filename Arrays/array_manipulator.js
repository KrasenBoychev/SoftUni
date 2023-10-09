function arrayManipulator(integersArr, commandsArr) {
    for (let i = 0; i < commandsArr.length; i++) {
        let command = commandsArr[i];
        let splitCommand = command.split(" ");
        let toDo = splitCommand.shift();
        let isFInished = false;

        switch (toDo) {
            case "add": add(splitCommand); break;
            case "addMany": addMany(splitCommand); break;
            case "contains": contains(splitCommand); break;
            case "remove": remove(splitCommand); break;
            case "shift": shift(splitCommand); break;
            case "sumPairs": sumPairs(); break;
            case "print": print(); break;
        }
        if (isFInished === true){
            break;
        }
    }

    function add(array) {
        let index = Number(array.shift());
        let el = Number(array.shift());
        integersArr.splice(index, 0, el);
    }

    function addMany(array) {
        let index = Number(array.shift());
        while (array.length > 0) {
            let el = Number(array.shift());
            integersArr.splice(index, 0, el);
            index++;
        }
    }

    function contains(array) {
        let el = Number(array.shift());
        if (integersArr.includes(el)) {
            console.log(integersArr.indexOf(el));
        } else {
            console.log(`-1`);
        }
    }

    function remove(array) {
        let index = Number(array.shift());
        integersArr.splice(index, 1);
    }

    function shift(array) {
        let rotation = Number(array.shift());
        while (rotation > 0) {
            let firstEl = integersArr.shift();
            integersArr.push(firstEl);
            rotation--;
        }
    }

    function sumPairs() {
        for (let i = 0; i < integersArr.length; i++) {
            let sum = integersArr[i] + integersArr[i + 1];
            if ((i + 1) != integersArr.length) {
                integersArr.splice(i, 2, sum);
            }
        }
    }

    function print() {
        isFInished = true;
        console.log(`[ ${integersArr.join(`, `)} ]`);
    }

}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 
    'shift 1', 'print']);