function sequences(entryArr) {
    for (let i = 0; i < entryArr.length; i++) {
        let element = entryArr[i];
        element = JSON.parse(element);
        element.sort((a, b) => b - a);
        entryArr[i] = JSON.stringify(element);
    }

    for (let i = 0; i < entryArr.length; i++) {
        let element = entryArr[i];
        let checkArr = entryArr.slice(i + 1);
        if(checkArr.includes(element)) {
            entryArr = entryArr.filter(x => x != element);
            entryArr.splice(i, 0, element);
        }
    }

    for (let i = 0; i < entryArr.length; i++) {
        let element = entryArr[i];
        entryArr[i] = JSON.parse(element);
    }

    entryArr.sort((a,b) => a.length - b.length);

    entryArr.forEach(element => {
        console.log(`[${element.join(`, `)}]`);
    });
}
sequences(["[7.14, 7.180, 7.339, 80.099]",
"[5, 6, 3, 8]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[2, 3, 9, 5]"]);