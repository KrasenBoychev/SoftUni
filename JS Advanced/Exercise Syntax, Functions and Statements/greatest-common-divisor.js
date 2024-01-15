function gcd(a, b) {
    let index;
    if (a > b) {
        index = b;
    } else {
        index = a;
    }

    while (b % index != 0 || a % index != 0) {
        index--;
    } 

    console.log(index);
}

gcd(15, 5);

