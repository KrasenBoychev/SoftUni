function listProcessor(input) {
    let result = [];

    let commands = {
        add: (text) => {result.push(text)},
        remove: (text) => {result = result.filter(x => x != text)},
        print: (text) => {console.log(result.join(`,`));}
    }

    for (const str of input) {
        let [command, text] = str.split(` `);

        commands[command](text);
    }
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);