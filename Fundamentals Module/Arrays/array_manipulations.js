function arrayManipulations(inputArr) {
    let arrOfNums = inputArr[0].split(` `);
    for (let i = 1; i < inputArr.length; i++) {
        let el = inputArr[i].split(` `);
        switch (el[0]) {
            case "Add": 
                arrOfNums.push(el[1]); break;
            case "Remove": 
                while (arrOfNums.includes(el[1])) {
                    let index = arrOfNums.indexOf(el[1]);
                    arrOfNums.splice(index, 1);
                }
                break;
            case "RemoveAt":
                arrOfNums.splice(el[1], 1);
                break;
            case "Insert":
                arrOfNums.splice(el[2], 0, el[1]);
                break;
        }
    }
    console.log(arrOfNums.join(` `));
}
arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);