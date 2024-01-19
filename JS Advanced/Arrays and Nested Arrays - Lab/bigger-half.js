function biggerHalf(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let result = sortedArray.slice(Math.floor(sortedArray.length / 2));
    return result;
}

biggerHalf([3, 19, 14, 7, 2, 19, 6]);