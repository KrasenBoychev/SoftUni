function rotateArr(arr, rotations) {
    
    for (let i = 1; i <= rotations; i++) {

        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(` `));
}

rotateArr(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15);