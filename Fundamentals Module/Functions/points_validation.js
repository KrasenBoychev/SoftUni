function pointsValidation(inputArr) {
    let x1 = inputArr[0];
    let y1 = inputArr[1];
    let x2 = inputArr[2];
    let y2 = inputArr[3];

    let distanceOne = Math.sqrt((x1 * x1) + (y1 * y1));
    if (isInteger(distanceOne) == true) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    let distanceTwo = Math.sqrt((x2 * x2) + (y2 * y2));
    if (isInteger(distanceTwo) == true) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    let distanceBetweenPoints = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));
    if (isInteger(distanceBetweenPoints) == true) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function isInteger(distance) {
        if (distance % 1 == 0) {
            return true;
        }
    }
}
pointsValidation([2, 1, 1, 1]);