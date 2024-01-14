function mathOperations(a, b, str) {
    switch (str) {
        case `+`:
            console.log(a + b);
            break;

        case `-`:
            console.log(a - b);
            break;

        case `*`:
            console.log(a * b);
            break;

        case `/`:
            console.log(a / b);
            break;

        case `%`:
            console.log(a % b);
            break;

        case `**`:
            console.log(a ** b);
            break;
    }
}

mathOperations(3, 5.5, '*');