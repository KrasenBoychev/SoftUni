function palindromeIntegers(inputArr){
    let reversedStr = "";
    for (let el of inputArr){
        reverse(el);
        el == reversedStr ? console.log("true") : console.log("false");
    }

    function reverse(el){
        let elToString = String(el);
        reversedStr = elToString.split("").reverse().join("");
        reversedStr = Number(reversedStr);
    }
}
palindromeIntegers([32,2,232,1010]);