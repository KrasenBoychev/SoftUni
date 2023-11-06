function wordsTracker(input) {
    let mainWords = input.shift().split(` `);
    let wordsObj = {};

    for (let word of mainWords) {
        wordsObj[word] = 0;
    }

    for (let word of input) {
        if (word in wordsObj) {
            wordsObj[word]++;
        }
    }

    let entries = Object.entries(wordsObj).sort((a,b) => b[1] - a[1]);
    
    for (let [word, repeats] of entries) {
        console.log(`${word} - ${repeats}`);
    }

}
wordsTracker([
    'this sentence task',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'task', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);