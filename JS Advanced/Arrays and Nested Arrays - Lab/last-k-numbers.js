function kNums(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let nums;

        if (i <= k) {
            nums = result.slice(0, i);
            
        } else {
            nums = result.slice(i-k, i);
        }

        let sumNums = nums.reduce((a, b) => a + b);
            result.push(sumNums);
    }
    return result;
}

kNums(8, 2);