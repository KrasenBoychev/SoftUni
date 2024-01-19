function oddPos(array) {
    let result = [];
    for (let index = 1; index < array.length; index += 2) {
          result.push(array[index]);
    }
    
    result = result
        .map(el => el * 2)
        .reverse();

   return result.join(` `);
}

oddPos([3, 0, 10, 4, 7, 3]);