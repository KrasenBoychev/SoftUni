function list(names) {
    let sorted = names.sort((a, b) => a.localeCompare(b));

    let count = 1;
    sorted.forEach(element => {
        console.log(`${count}.${element}`);
        count++;
    });
}

list(["John", "Bob", "Christina", "Ema"]);