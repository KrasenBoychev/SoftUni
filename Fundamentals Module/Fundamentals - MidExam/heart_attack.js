function heartAttack(commands) {
    let neighbourhood = commands
        .shift(commands)
        .split("@")
        .map(Number);

    let cupidStartIndex = 0;
    let decreaseNum = 2;

    let i = 0;
    while (commands[i] != "Love!") {
        let el = commands[i].split(" ");
        let jumpLength = Number(el[1]);
        jump(jumpLength);
        i++;
    }

    console.log(`Cupid's last position was ${cupidStartIndex}.`);
    isMissionSuccessful();

    function jump(interval) {
        let arriveIndex = cupidStartIndex + interval;
        if (arriveIndex > (neighbourhood.length - 1)) {
            arriveIndex = 0;
        }
        let num = neighbourhood[arriveIndex];
        if (num > 0) {
            num -= decreaseNum;
            neighbourhood[arriveIndex] = num;
            if (num == 0) {
                console.log(`Place ${arriveIndex} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${arriveIndex} already had Valentine's day.`);
        }
        cupidStartIndex = arriveIndex;
    }

    function isMissionSuccessful() {
        let filteredArr = neighbourhood.filter(x => x > 0);
        if (filteredArr.length == 0) {
            console.log(`Mission was successful.`);
        } else {
            console.log(`Cupid has failed ${filteredArr.length} places.`);
        }
    }
}
heartAttack(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"]);