function printNthEl(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i += num) {
        result.push(arr[i]);
    }
   return result;
}

printNthEl(['5', 
'20', 
'31', 
'4', 
'20'], 
2);