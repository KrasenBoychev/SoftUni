function guineaPig(commands) {
    let qtyFood = Number(commands[0]) * 1000;
    let qtyHay = Number(commands[1]) * 1000;
    let qtyCover = Number(commands[2]) * 1000;
    let gPigWeight = Number(commands[3]) * 1000;

    let days = 30;
    let foodEveryDay = 300;
    let runOut = false;

    for (let d = 1; d <= days; d++) {
        qtyFood -= foodEveryDay;
        if (d % 2 == 0) {
            qtyHay -= qtyFood * 0.05;
        }
        if (d % 3 == 0) {
            qtyCover -= gPigWeight / 3;
        }
        if (qtyFood <= 0 || qtyHay <= 0 || qtyCover <= 0) {
            runOut = true;
            break;
        }
    }
    if (runOut == true) {
        console.log(`Merry must go to the pet store!`);
    } else {
        let excessFood = qtyFood / 1000;
        let excessHay = qtyHay / 1000;
        let excessCover = qtyCover / 1000;
        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood.toFixed(2)}, Hay: ${excessHay.toFixed(2)}, Cover: ${excessCover.toFixed(2)}.`);
    }
}
guineaPig(["9",
"5",
"5.2",
"1"]);