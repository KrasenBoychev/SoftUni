function houseParty(inputArr){
    let guestList = [];
    for (let i = 0; i < inputArr.length; i++){
        let command = inputArr[i];
        let splitCommand = command.split(" ");
        let name = splitCommand[0];
        let isInTheList = guestList.includes(name);

        if (!command.includes("not")){
            if (isInTheList) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else {
            if(isInTheList) {
                guestList = guestList.filter(x => x !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(guestList.join(`\n`));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);