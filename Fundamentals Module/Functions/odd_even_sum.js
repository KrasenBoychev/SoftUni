function oddEvenSum(input){
    let even = 0;
    let odd = 0;
    inputToString = String(input);
    for (let i = 0; i < inputToString.length; i++) {
        let num = Number(inputToString[i]);
        if (num % 2 == 0){
            even += num;
        } else {
            odd += num;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddEvenSum(3495892137259234)