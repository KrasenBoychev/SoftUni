function carWash(inputArr) {
    let cleaned = 0;
    for (let i = 0; i < inputArr.length; i++) {
        switch (inputArr[i]) {
            case "soap": cleaned += 10;
                break;
            case "water": cleaned *= 1.2;
                break;
            case "vacuum cleaner": cleaned *= 1.25;
                break;
            case "mud": cleaned *= 0.9;
                break;
        }
    }
    console.log(`The car is ${cleaned.toFixed(2)}% clean.`);
}
carWash(["soap", "water", "mud", "mud", "water", "mud",
"vacuum cleaner"]
)