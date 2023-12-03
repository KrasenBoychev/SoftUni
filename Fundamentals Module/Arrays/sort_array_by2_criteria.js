function sortArray(inputArr) {
    inputArr.sort(function (word1, word2) {
        if (word1.length > word2.length) return 1;
        if (word1.length < word2.length) return -1;

        if (word1 > word2) return 1;
        if (word1 < word2) return -1;
    });  
    console.log(inputArr.join(`\n`));
}
sortArray(['Isacc',
'Theodor',
'Jack',
'Harrison',
'George']);