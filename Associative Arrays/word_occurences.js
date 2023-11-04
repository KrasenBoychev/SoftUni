function wordOccurences(input) {
    let data = new Map();

    for (let word of input) {
        if (!data.has(word)) {
            let count = 1;
            data.set(word, count)
        } else {
            let currCount = data.get(word);
            let newCount = currCount + 1;
            data.set(word, newCount);
        }
    }

    let sorted = Array.from(data).sort((a,b) => b[1] - a[1]);

    let resultObj = {};

    for (let [word, count] of sorted) {
        resultObj[word] = count;
        console.log(word, `->`, count, `times`);
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);