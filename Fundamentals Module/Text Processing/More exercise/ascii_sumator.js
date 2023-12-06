function asciiSumator(input) {
    let first = input.shift().charCodeAt();
    let second = input.shift().charCodeAt();
    
    let start = 0;
    let end = 0;

    if (first > second) {
        start = second;
        end = first;
    } else {
        start = first;
        end = second;
    }

    let str = input.shift();
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        let symbol = str[i].charCodeAt();

        if (symbol > start && symbol < end) {
            sum += symbol;
        }
    }
    console.log(sum);
}

asciiSumator(['.',
'@',
'dsg12gr5653feee5']);

asciiSumator(['?',
'E',
'@ABCEF']);

asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']);