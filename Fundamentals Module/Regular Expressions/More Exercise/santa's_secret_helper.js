function santaSecretHelper(input) {
    let key = Number(input.shift());
    let line = input.shift();

    let pattern = /@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*\!(?<behaviour>[G|N])\!/;

    while (line != `end`) {
        let newStr = ``;

        for (let symbol of line) {
            let newSymbolCode = symbol.charCodeAt() - key;
            newStr += String.fromCharCode(newSymbolCode);
        }

        let match = pattern.exec(newStr);

        if (match) {
            let childBehaviour = match.groups.behaviour;

            if (childBehaviour == `G`) {
                let childName = match.groups.name;
                console.log(childName);
            }
        }
        

        line = input.shift();
    }
}

// santaSecretHelper(['3',
//     'CNdwhamigyenumje$J$',
//     'CEreelh-nmguuejnW$J$',
//     'CVwdq&gnmjkvng$Q$',
//     'end']);

santaSecretHelper(['3',
"N}eideidmk$'(mnyenmCNlpamnin$J$",
'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
'ppqmkkkmnolmnnCEhq/vkievk$Q$',
'yyegiivoguCYdohqwlqh/kguimhk$J$',
'end']);