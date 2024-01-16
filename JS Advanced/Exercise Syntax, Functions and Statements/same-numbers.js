function sameNums(num) {
    let arrayNum = num
        .toString()
        .split(``);

    let isValid = true;

   for (let i = 0; i < arrayNum.length - 1; i++) {
        if (arrayNum[i] != arrayNum[i+1]) {
            isValid = false;
        }
   }

   console.log(isValid);

   arrayNum = arrayNum.map(Number);
   let sum = arrayNum.reduce((a, b) => a + b);
   console.log(sum); 
}

sameNums(1234);