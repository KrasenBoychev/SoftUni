function squareOfStars(num) {
    if (typeof(num) == `number`) {

        for (let index = 0; index < num; index++) {
           console.log(`* `.repeat(num));            
        }
    } else {
        for (let index = 0; index < 5; index++) {
            console.log(`* `.repeat(5));            
         }

    }

}

squareOfStars(3)