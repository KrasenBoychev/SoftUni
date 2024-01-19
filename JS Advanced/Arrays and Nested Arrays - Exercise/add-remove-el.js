function el(commands) {
    let arr = [];

    for (let i = 0; i < commands.length; i++) {
       
        if (commands[i] == "add") {
            arr.push(i + 1);

        } else {
            arr.pop();
        }
    }

    if (arr.length == 0) {
        console.log(`Empty`);
    } else {
        console.log(arr.join(`\n`));
    }
    
}

el(['remove', 
'remove', 
'remove']);