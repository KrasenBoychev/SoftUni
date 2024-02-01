function solution(a) {
    const result = (b) => {
        return a + b;
    }
    return result;
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));