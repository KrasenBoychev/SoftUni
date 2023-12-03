function bombNums(seqOfNumsArr, bombNumArr) {
    let bombNum = bombNumArr[0];
    let power = bombNumArr[1];

    while (seqOfNumsArr.includes(bombNum)) {
        let bombNumIndex = seqOfNumsArr.indexOf(bombNum);
        let startSplice = bombNumIndex - power;
        let lengthSplice = (power * 2) + 1;
        if (startSplice < 0) {
            lengthSplice = lengthSplice + startSplice;
            startSplice = 0;
        }
        seqOfNumsArr.splice(startSplice, lengthSplice);
    }
    
    let sum = 0;
    for (let i = 0; i < seqOfNumsArr.length; i++) {
        sum += seqOfNumsArr[i];
    }
    console.log(sum);
}
bombNums([3, 30, 10], [3, 1]);