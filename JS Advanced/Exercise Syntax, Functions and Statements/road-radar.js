function roadRadar(currSpeed, area) {
    let maxSpeed = 0;
    let difference = 0;
    let status = ``;

    function speedDifference() {
        difference = currSpeed - maxSpeed;
        if (difference > 0) {

            if (difference <= 20) {
                status = `speeding`;
            } else if (difference <= 40) {
                status = `excessive speeding`;
            } else {
                status = `reckless driving`;
            }

            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);

        } else {

            console.log(`Driving ${currSpeed} km/h in a ${maxSpeed} zone`);

        }
    }

    switch (area) {
        case `motorway`:
            maxSpeed = 130;
            speedDifference();
            break;

        case `interstate`:
            maxSpeed = 90;
            speedDifference();
            break;

        case `city`:
            maxSpeed = 50;
            speedDifference();
            break;

        case `residential`:
            maxSpeed = 20;
            speedDifference();
            break;
    }
}

roadRadar(120, 'interstate');