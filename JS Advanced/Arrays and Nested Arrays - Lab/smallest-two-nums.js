function twoNums(array) {
   let sortedArray = array.sort((a, b) => a -b);
   let smallestNums = sortedArray.slice(0, 2);
   console.log(smallestNums.join(` `));
}

twoNums([3, 0, 10, 4, 7, 3]);