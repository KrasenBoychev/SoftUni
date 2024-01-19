function sumFirstLast(array) {
    let first = Number(array.shift());
    let last = Number(array.pop());
    return first + last;
}

sumFirstLast(['20', '30', '40']);