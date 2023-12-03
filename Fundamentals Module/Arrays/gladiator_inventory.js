function gladiatorInventory(inputArr) {
    let equipmentArr = inputArr.shift();
    equipmentArr = equipmentArr.split(" ");

    while (inputArr.length > 0) {
        let command = inputArr.shift();
        command = command.split(" ");
        let action = command.shift();
        let equipment = command.shift();

        switch (action) {
            case "Buy": buy(equipment); break;
            case "Trash": trash(equipment); break;
            case "Repair": repair(equipment); break;
            case "Upgrade": upgrade(equipment); break;
        }
    }

    console.log(equipmentArr.join(" "));

    function buy(item) {
        if (!equipmentArr.includes(item)) {
            equipmentArr.push(item);
        }
    }

    function trash(item) {
        if (equipmentArr.includes(item)) {
            let index = equipmentArr.indexOf(item);
            equipmentArr.splice(index, 1);
        }
    }

    function repair(item) {
        trash(item);
        equipmentArr.push(item);
    }

    function upgrade(item) {
        splitItem = item.split("-");
        let keyWord = splitItem[0];
        if (equipmentArr.includes(keyWord)) {
            let index = equipmentArr.indexOf(keyWord);
            equipmentArr.splice(index + 1, 0, splitItem.join(":"));
        }
    }
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);