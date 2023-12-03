function train(inputArr) {
    let wagons = inputArr.shift().split(` `).map(Number);
    let maxCapacity = inputArr.shift();
    maxCapacity = Number(maxCapacity);
    for (let i = 0; i < inputArr.length; i++) {
        let [command, passengers] = inputArr[i].split(` `);
        passengers = Number(passengers);

        if (command == "Add") {
            addWagon(passengers);
        } else {
            command = Number(command);
            addPassengers(command);
        }
    }
    console.log(wagons.join(` `));

    function addWagon(wagon) {
        wagons.push(wagon);
    }

    function addPassengers(passNum) {
        for (let el of wagons) {
            let sum = el + passNum;
            if (sum <= maxCapacity) {
                let index = wagons.indexOf(el);
                wagons.splice(index, 1, sum);
                break;
            }
        }
    }
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']);