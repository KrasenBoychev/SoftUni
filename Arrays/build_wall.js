function buildWall(allWallsHeight) {
    let recordCubicYards = [];
    let sumCubicYards = 0;
    filterArray(allWallsHeight);

    while(allWallsHeight.length > 0) {
        increase(allWallsHeight);

        let cubicYardsPerDay = allWallsHeight.length * 195;
        sumCubicYards += cubicYardsPerDay;
        recordCubicYards.push(cubicYardsPerDay);

        filterArray(allWallsHeight);
    }

    let moneySpent = sumCubicYards * 1900;
    
    console.log(recordCubicYards.join(", "));
    console.log(`${moneySpent} pesos`);

    function filterArray(array) {
        allWallsHeight = array.filter(x => x < 30);
    }

    function increase(array) {
        allWallsHeight = array.map(x => x + 1);   
    }
}
buildWall([17, 22, 17, 19, 
    17]);