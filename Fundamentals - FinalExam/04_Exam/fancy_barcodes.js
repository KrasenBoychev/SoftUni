function fancyBarcodes(input) {
    let pattern = /@#+(?<word>[A-Z][A-Za-z\d]{4}[A-Za-z\d]*[A-Z])@#+/;

    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let match = input[i].match(pattern);
        if(match) {
            let word = match.groups.word;
            let barcode = ``;
            for (const el of word) {
                if(!isNaN(Number(el))) {
                    barcode += el;
                }
            }
            if (barcode.length == 0) {
                barcode = `00`;
            }
            console.log(`Product group: ${barcode}`);
        } else{ 
            console.log(`Invalid barcode`);
        }
    }
}
// fancyBarcodes(["3",
// "@#FreshFisH@#",
// "@###Brea0D@###",
// "@##Che4s6E@##"]);

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);