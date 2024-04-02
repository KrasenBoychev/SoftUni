function sumNums(a: string | number, b: string | number): number{
    a = Number(a);
    b = Number(b);

    let result: number = 0;

    for (let i: number = a; i <= b; i++) {
        result += i;
    }

    return result;
}

console.log(sumNums('-8', '20'));
