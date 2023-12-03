function sorting(inputArr) {
    let newArr = [];
    newArr.length = inputArr.length;

    for (let i = 0; i < newArr.length; i++) {
        if (i % 2 == 0) {
            inputArr.sort((a, b) => b-a);
            newArr[i] = inputArr.shift();
        } else {
            inputArr.sort((a, b) => a-b);
            newArr[i] = inputArr.shift();
        }
    }
    console.log(newArr.join(` `));
}
sorting([34, 2, 32, 45, 690, 6, 32,
    7, 19, 47]);