function printDna(inputNum) {
    let dna = `ATCGTTAGGG`;
    let dnaArr = [];
    for (let i = 0; i < dna.length; i++) {
        dnaArr.push(dna[i]);
    }

    for (let rows = 1; rows <= inputNum; rows++) {

        firstRow(dnaArr[0], dnaArr[1]);
        rows++;
        if(rows > inputNum){
            break;
        }
        dnaChange();
        

        secondRow(dnaArr[0], dnaArr[1]);
        rows++;
        if(rows > inputNum){
            break;
        }
        dnaChange();
        

        thirdRow(dnaArr[0], dnaArr[1])
        rows++;
        if(rows > inputNum){
            break;
        }
        dnaChange();

        secondRow(dnaArr[0], dnaArr[1])
        rows++;
        if(rows > inputNum){
            break;
        } else {
            rows--;
            dnaChange();
        }
    }

    function firstRow(a, b){
        console.log(`**${a}${b}**`);
    }

    function secondRow(a, b){
        console.log(`*${a}--${b}*`);
    }

    function thirdRow(a, b){
        console.log(`${a}----${b}`);
    }

    function dnaChange(){
        dnaArr.push(dnaArr.shift());
        dnaArr.push(dnaArr.shift());
    }
}
printDna(4);