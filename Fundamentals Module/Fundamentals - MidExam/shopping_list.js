function shoppingList(commands) {

    let initialList = commands.shift().split("!");

    let i = 0;
    while (commands[i] != "Go Shopping!") {
        let el = commands[i].split(" ");
        let word = el[0];
        switch (word) {
            case "Urgent": urgent(el[1]);
                break;
            case "Unnecessary": unnecessary(el[1]);
                break;
            case "Correct": correct(el[1], el[2])
                break;
            case "Rearrange": rearrange(el[1]);
                break;
        }
        i++;
    }

    console.log(initialList.join(", "));

    function urgent(item) {
        if (!initialList.includes(item)) {
            initialList.unshift(item);
        }
    }

    function unnecessary(item) {
        if (initialList.includes(item)) {
            initialList = initialList.filter(x => x != item);
        }
    }

    function correct(oldItem, newItem) {
        if (initialList.includes(oldItem)) {
            let indexOldItem = initialList.indexOf(oldItem);
            initialList.splice(indexOldItem, 1, newItem);
        }
    }

    function rearrange(item) {
        if (initialList.includes(item)) {
            let indexItem = initialList.indexOf(item);
            initialList.splice(indexItem, 1);
            initialList.push(item);
            }
        }
    }
    shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);