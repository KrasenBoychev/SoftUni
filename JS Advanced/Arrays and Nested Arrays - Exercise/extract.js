function extract(arr) {
    let maxNum = 0;
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];

        if (maxNum <= currNum) {
            maxNum = currNum;
            result.push(maxNum);
        }
    }
    return result;
}

extract([30,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);