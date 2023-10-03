function radioCrystals(inputArr) {
    let targetedThickness = inputArr[0];

    for (let i = 1; i < inputArr.length; i++) {
        let chunk = inputArr[i];
        console.log(`Processing chunk ${chunk} microns`);

        let countCuts = 0;
        while (targetedThickness < chunk) {
            let thickness = chunk;
            if (cut(thickness) <= (targetedThickness - 2)) {
                break;
            } else {
                chunk = cut(thickness);
                countCuts++;
            }
        }
        if (countCuts > 0) {
            console.log(`Cut x${countCuts}`);
            chunk = transportAndWash(chunk);
        }

        let countLaps = 0;
        while (targetedThickness < chunk) {
            let thickness = chunk;
            if (lap(thickness) <= (targetedThickness - 2)) {
                break;
            } else {
                chunk = lap(thickness);
                countLaps++;
            }
        }
        if (countLaps > 0) {
            console.log(`Lap x${countLaps}`);
            chunk = transportAndWash(chunk);
        }

        let countGrinds = 0;
        while (targetedThickness < chunk) {
            let thickness = chunk;
            if (grind(thickness) <= (targetedThickness - 2)) {
                break;
            } else {
                chunk = grind(thickness);
                countGrinds++;
            }
        }
        if (countGrinds > 0) {
            console.log(`Grind x${countGrinds}`);
            chunk = transportAndWash(chunk);
        }

        let countEtches = 0;
        while (targetedThickness < chunk) {
            let thickness = chunk;
            if (etch(thickness) <= (targetedThickness - 2)) {
                break;
            } else {
                chunk = etch(thickness);
                countEtches++;
            }
        }
        if (countEtches > 0) {
            console.log(`Etch x${countEtches}`);
            chunk = transportAndWash(chunk);
        }

        if (chunk == (targetedThickness - 1)) {
            chunk = xRay(chunk);
            console.log(`X-ray x1`);
        }

        console.log(`Finished crystal ${chunk} microns`);
    }

    function cut(thickness) {
        thickness /= 4;
        return thickness;
    }

    function lap(thickness) {
        thickness *= 0.8;
        return thickness;
    }

    function grind(thickness) {
        thickness -= 20;
        return thickness;
    }

    function etch(thickness) {
        thickness -= 2;
        return thickness;
    }

    function xRay(chunk) {
        chunk += 1;
        return chunk;
    }

    function transportAndWash(chunk) {
        chunk = Math.floor(chunk);
        console.log(`Transporting and washing`);
        return chunk;
    }
}
radioCrystals([1000, 4000, 8100]);