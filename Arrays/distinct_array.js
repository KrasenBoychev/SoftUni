function distinctArray(inputArr){
    for (let i = 0; i < inputArr.length; i++) {
        let el = inputArr.splice(i, 1);
        let filtered = inputArr.filter(x => x !== el[0]);
        inputArr = filtered;
        inputArr.splice(i, 0, el);
    }
        console.log(inputArr.join(` `));
}
distinctArray([1, 2, 3, 4]);