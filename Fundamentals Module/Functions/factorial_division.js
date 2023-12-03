function factorialDivision(numOne, numTwo){

    let devide = calc(numOne) / calc(numTwo);
    console.log(devide.toFixed(2));

    function calc(num){
        let result = num;
        if(num == 0){
            result = 1;
        }
        for(let i = num - 1; i > 0; i--){
            result *= i;
        }
        return result;
    }
}
factorialDivision(6, 2);