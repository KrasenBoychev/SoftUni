function validityChecker(x1, y1, x2, y2) {

    function calc(distance, a, b, c, d) {
        let isValidDistance = `valid`;

        if (distance % 1 != 0) {
            isValidDistance = `invalid`;
        }
        
        console.log(`{${a}, ${b}} to {${c}, ${d}} is ${isValidDistance}`);
    }
    
    let distance1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    calc(distance1, x1, y1, 0, 0);

    let distance2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    calc(distance2, x2, y2, 0, 0);

    let distance3 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    calc(distance3, x1, y1, x2, y2);
}

validityChecker(2, 1, 1, 1);