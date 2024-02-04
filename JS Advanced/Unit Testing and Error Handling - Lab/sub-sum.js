function sum(arr, start, end) {
    let sum = 0;

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (start < 0) {
        start = 0;
    }

    if (end >= arr.length) {
        end = arr.length - 1;
    }

    for (i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }

    return sum;
}

sum([10, 20, 30, 40, 50, 60], 3, 300);