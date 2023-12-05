function serializeString([input]) {
    let symbols = {};
    
    for (let i = 0; i < input.length; i++) {
        let symbol = input[i];

        if (symbol in symbols) {
            symbols[symbol].push(i);
        } else {
            symbols[symbol] = [i];
        }
    }

    for (const [symbol, indexes] of Object.entries(symbols)) {
        console.log(symbol + `:` + indexes.join(`/`));
    }
}
//serializeString(["abababa"]);

serializeString(["avjavamsdmcalsdm"]);