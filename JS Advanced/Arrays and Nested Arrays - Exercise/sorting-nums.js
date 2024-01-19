function sortingNums(arr) {
    let ascending = arr.sort((a, b) => a - b);
    let result = [];

    let index = 0;
    
   while (ascending.length > 0) {
       
        if (index % 2 == 0) {
            result.push(ascending.shift());
        } else {
            result.push(ascending.pop());
        }
        index++;
    }
    return result;
}

sortingNums([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]);