function lift(peopleAndWagons) {
    let peopleInTheQueue = Number(peopleAndWagons.shift());
    let wagons = peopleAndWagons[0].split(" ").map(Number);

    for (let i = 0; i < wagons.length; i++) {
        let oneWagon = wagons[i];
        let freeSpace = 4 - oneWagon;
        if (freeSpace > 0) {
            if (freeSpace < peopleInTheQueue) {
                wagons[i] = 4;
            } else {
                wagons[i] += peopleInTheQueue;
            }
            peopleInTheQueue -= freeSpace;
        } else {
            continue;
        }

        if (peopleInTheQueue <= 0) {
            peopleInTheQueue = 0;
            break;
        }
    }
    let checkWagons = wagons.filter(x => x < 4);
    if (checkWagons.length > 0 && peopleInTheQueue == 0) {
        console.log(`The lift has empty spots!`);
        console.log(`${wagons.join(" ")}`);
    } else if (checkWagons.length == 0 && peopleInTheQueue > 0) {
        console.log(`There isn't enough space! ${peopleInTheQueue} people in a queue!`);
        console.log(`${wagons.join(" ")}`);
    } else {
        console.log(`${wagons.join(" ")}`);
    }
}
lift([
    "20",
    "0 2 0"
   ]);