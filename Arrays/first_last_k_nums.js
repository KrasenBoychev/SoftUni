function kNums(inputArr) {
    let k = inputArr.shift();
    console.log(inputArr.slice(0, k).join(" "));
    console.log(inputArr.splice((inputArr.length - k), k).join(" "));
}
kNums([2, 7, 8, 9]);