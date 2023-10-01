function loadingBar(inputNum){

    if(inputNum < 100){
        console.log(`${inputNum}% [${bar(inputNum)}]`);
        console.log(`Still loading...`);
    } else{
        console.log(`100% Complete!`);
    }

    function bar(inputNum){
        let newArr = [];
        for(let i = 0; i < (inputNum / 10); i++){
            newArr.push("%");
        }
        for(let i = (inputNum / 10); i < 10; i++){
            newArr.push(".");
        }
        return newArr.join("");
    }
}
loadingBar(100);