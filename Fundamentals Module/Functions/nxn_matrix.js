function nxnMatrix(num) {
    let repeatNum = 0;

    if (num < 0) {
        repeatNum = Math.abs(num);
    } else {
        repeatNum = num;
    }

    for (let rows = 1; rows <= repeatNum; rows++) {
        let str = [];
        for (let i = 1; i <= repeatNum; i++){
            str.push(num);
        }
        console.log(str.join(" "));
    }
}
nxnMatrix(-2);