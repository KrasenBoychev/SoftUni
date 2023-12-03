function experienceGaining(inputArr) {
    let amountOfExpNeeded = inputArr.shift();
    let countBattles = inputArr.shift();
    let totalExp = 0;
    let counter = 0;
    
    for (let i = 0; i < countBattles; i++) {
        let gainedExp = inputArr[i];
        counter++;
        if (counter % 3 == 0) {
            gainedExp *= 1.15;
        } else if (counter % 5 == 0) {
            gainedExp *= 0.9;
        } else if (counter % 15 == 0) {
            gainedExp *= 1.05;
        }
        totalExp += gainedExp;
        if (totalExp >= amountOfExpNeeded) {
            break;  
        }
    }
    if (totalExp >= amountOfExpNeeded) {
        console.log(`Player successfully collected his needed experience for ${counter} battles.`);
    } else {
        let neededExp = amountOfExpNeeded - totalExp;
        console.log(`Player was not able to collect the needed experience, ${neededExp.toFixed(2)} more needed.`);
    }
}
experienceGaining([500,

    5,
    
    50,
    
    100,
    
    200,
    
    100,
    
    20]);