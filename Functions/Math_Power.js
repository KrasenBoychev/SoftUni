function mathPower(value, power) {

    let result = value;

    for (let i = 1; i < power; i++) {

        result *= value;
    }

    console.log(result);

}

mathPower(3, 4);