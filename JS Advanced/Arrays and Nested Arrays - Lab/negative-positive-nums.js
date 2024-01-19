function nums(array) {
    let result = [];

    for (const el of array) {
        if (el < 0) {
            result.unshift(el);

        } else {
            result.push(el);
        }
    }   
    console.log(result.join(`\n`));
}

nums([7, -2, 8, 9]);