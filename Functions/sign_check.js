function sign_check(numOne, numTwo, numThree) {
   if (numOne < 0) {
        if (numTwo < 0) {
            if (numThree < 0) {
                console.log("Negative");
            } else {
                console.log("Positive");
            }
        } else {
            if (numThree < 0) {
                console.log("Positive");
            } else {
                console.log("Negative");
            }
        }
   } else {
        if (numTwo < 0) {
            if (numThree < 0) {
                console.log("Positive");
            } else {
                console.log("Negative");
            }
        } else {
            if (numThree < 0) {
                console.log("Negative");
            } else {
                console.log("Positive");
            }
        }
   }
}
sign_check(-5,
    1,
    1);