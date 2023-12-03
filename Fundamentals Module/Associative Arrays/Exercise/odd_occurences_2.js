function oddOccurences(input) {
    let words = input.split(` `);
    let wordsObj = {};
    for (let element of words) {
        element = element.toLowerCase();
        if (!wordsObj.hasOwnProperty(element)) {
            wordsObj[element] = 1;
        } else {
            wordsObj[element] += 1;
        }
    }

words = words.map(x => x.toLowerCase());
let setArray = new Set(words);

let result = [];

for (let element of setArray) {
    if (wordsObj.hasOwnProperty(element)) {
        if (wordsObj[element] % 2 != 0) {
            result.push(element);
        }
    }
}

console.log(result.join(` `));
  
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 2 1 5 C#');