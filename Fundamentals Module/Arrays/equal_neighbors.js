function equalNeighbors(inputArr) {
    let countPairs = 0;

    for (let index = 0; index < inputArr.length; index++) {
        let eachArr = inputArr[index];

        for (let i = 0; i < eachArr.length; i++) {
            let currStr = eachArr[i];

            //check if the next num is the same
            if (i < eachArr.length - 1) {
                let nextStr = eachArr[i + 1];
                if (currStr == nextStr) {
                    countPairs++;
                }
            }

            //check if the num from the array below at the same index is the same
            if (index < inputArr.length - 1) {
                let nextArr = inputArr[index + 1];
                let strAtSameIndex = nextArr[i];
                if (currStr == strAtSameIndex) {
                    countPairs++;
                }
            }
        }
    }
    console.log(countPairs);
}

equalNeighbors([['test', 'yo', 'yo',
'ho'],
['well', 'done', 'no',
'6'],
['not', 'done', 'yet',
'5']]
);