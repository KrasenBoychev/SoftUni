function passwordValidation(input) {

    let validationCount = 0;

    length(input);
    lettersAndDigits(input);
    atLeastTwoDigits(input);

    if (validationCount == 3){
        console.log(`Password is valid`);
    }

    function length(input) {
        if (input.length < 6 || input.length > 10) {
            console.log(`Password must be between 6 and 10 characters`);
        } else {
            validationCount++;
        }
    }
    
    function lettersAndDigits(input){
        /^[A-Za-z0-9]*$/.test(input) ? validationCount++ : console.log(`Password must consist only of letters and digits`);
    }
    
    function atLeastTwoDigits(input){
        let splitInput = input.split("");
        let countNums = 0;
        for (let i = 0; i < splitInput.length; i++){
            if (splitInput[i] == Number(splitInput[i])) {
                countNums++;
            }
        }
        countNums >= 2 ? validationCount++ : console.log(`Password must have at least 2 digits`);
    }
}

passwordValidation('MyPass123');