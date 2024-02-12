function truncate(n) {
    let str = 'hello my string';

    if (str.length <= n) {
        return str;
    }

    while (str.length > n) {
        let words = str.split(` `);

        if (words.length > 1) {
            words.pop();
            str = words.join(` `) + `...`;
            continue;
        }

        if (words.length == 1) {
            if (n < 4) {
                return `.`.repeat(n);

            } else {
                str = str.slice(0, n - 3);
                return str + `...`;
            }
        }
    }

    return str;

}

let result = truncate(10);
console.log(result);
