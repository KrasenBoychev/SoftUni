function argumentInfo(...input) {
    let result = {};

    input.forEach(element => {
        let type = typeof(element);
        console.log(`${type}: ${element}`);

        if (!(type in result)) {
            result[type] = 0;
        }

        result[type] += 1;
    });
    
    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of sorted) {
        console.log(`${key} = ${value}`);
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });