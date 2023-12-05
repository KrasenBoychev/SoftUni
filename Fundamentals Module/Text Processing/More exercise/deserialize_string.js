function deserializeString(input) {
    let symbols = {};
    let numberOfSymbols = 0;

    let line = input.shift();
    while (line != `end`) {

        let [symbol, indexes] = line.split(`:`);
        symbols[symbol] = indexes.split(`/`).map(Number);

        numberOfSymbols += symbols[symbol].length;

        line = input.shift();
    }
    
    let symbolsEntries = Object.entries(symbols);

    let word = ``;
    for (let i = 0; i < numberOfSymbols; i++) {

        symbolsEntries.forEach(symbol => {
            
            if (symbol[1].includes(i)) {
                word += symbol[0];
            }
        });
    }
    console.log(word);
}
// deserializeString(['a:0/2/4/6',
// 'b:1/3/5',
// 'end']);

deserializeString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end']);