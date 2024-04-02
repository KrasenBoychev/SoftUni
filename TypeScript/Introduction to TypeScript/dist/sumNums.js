"use strict";
function sumNums(a, b) {
    a = Number(a);
    b = Number(b);
    let result = 0;
    for (let i = a; i <= b; i++) {
        result += i;
    }
    return result;
}
console.log(sumNums('-8', '20'));
//# sourceMappingURL=sumNums.js.map