function rageQuit(input) {
    let pattern = /(?<str>\D+)(?<repeat>\d+)/g;
    let match = pattern.exec(input);
    let result = ``;
    let uniqueSymbols = [];

    while (match != null) {
        let str = match.groups.str;
        let repeat = Number(match.groups.repeat);
        str = str.toUpperCase();

        if (repeat != 0) {
            for (let symbol of str) {
                if (!uniqueSymbols.includes(symbol)) {
                    uniqueSymbols.push(symbol);
                }
            }
        } 

        let repeatedStr = str.repeat(repeat);
        result += repeatedStr;

        match = pattern.exec(input);
    }

    console.log(`Unique symbols used: ${uniqueSymbols.length}`);
    console.log(result);
}

rageQuit('e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{Dxi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]:\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15');

//rageQuit(`aSd2&5s@1`);