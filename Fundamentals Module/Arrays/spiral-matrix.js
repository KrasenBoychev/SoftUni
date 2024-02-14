function demo(firstNum, secondNum) {

    let newArr = [];
    newArr.length = firstNum;

    let progressiveNums = firstNum - 1;
    let left = 0;
    secondNum -= 2;

    let right = Math.floor((firstNum - 4) / 2);
    let progressiveSecondNums = newArr.length - (right * 2);

    let startNum = (firstNum * 2) + (firstNum - 2) * 2;

    let printArr = [];
    printArr.length = newArr.length;

    for (let x = 1; x <= firstNum; x++) {

        if (x === 1) {
            for (let i = 0; i < newArr.length; i++) {

                newArr[i] = i + 1;
            }

            console.log(newArr.join(" "));
        }

        if (x > 1 && x <= Math.ceil(firstNum /2 )) {

            for (let i = 0; i < left; i++) {

                printArr[i] = newArr[i] - 1;
            }

            for (let i = left; i < (left + progressiveNums); i++) {

                printArr[i] = startNum;
                startNum++;
            }

            startNum--;

            for (let i = (left + progressiveNums); i < printArr.length; i++) {

                printArr[i] = newArr[i] + 1;
            }

            console.log(printArr.join(" "));

            newArr = printArr;
            printArr = [];
            printArr.length = newArr.length;
            left += 1;
            progressiveNums -= 2;
            secondNum -= 2;
            startNum += progressiveNums + 1 + secondNum * 2;
        }

        if (x > 1 && x > Math.ceil(firstNum /2 )) {

            if (x ===  Math.ceil(firstNum / 2) + 1) {
            
            if (firstNum % 2 === 0) {

                for (let i = 0; i < ((firstNum - 2) / 2); i++) {

                    printArr[i] = newArr[i] - 1;
                }

                let count = 0;
                for (let i = ((firstNum - 2) / 2); i <= ((firstNum - 2) / 2) + 1; i++) {
                    if (count === 0) {

                        printArr[i] = newArr[i] + 3;
                    } else {

                        printArr[i] = newArr[i] + 1;
                    }

                    count++;
                }

                for (let i = ((firstNum - 2) / 2) + 2; i < printArr.length; i++) {

                    printArr[i] = newArr[i] + 1;
                } 
            } else {

                for (let i = 0; i < ((firstNum - 3) / 2); i++) {

                    printArr[i] = newArr[i] - 1;
                }

                let count = 0;
                for (let i = ((firstNum - 3) / 2); i <= ((firstNum - 3) / 2) + 2; i++) {
                    if (count === 0) {

                        printArr[i] = newArr[i] - 1;
                    } else if (count > 0){

                        printArr[i] = printArr[i-1] -1;
                    }

                    count++;
                }

                for (let i = ((firstNum - 3) / 2) + 3; i < printArr.length; i++) {

                    printArr[i] = newArr[i] + 1;
                }                 
            }
            console.log(printArr.join(" "));

            newArr = printArr;
            printArr = [];
            printArr.length = newArr.length;

        } 

        if (x > Math.ceil(firstNum / 2) + 1){

            for (let i = 0; i < right; i ++) {

                printArr[i] = newArr[i] - 1;
            }

            for (let i = right; i < (right + progressiveSecondNums); i++) {

                if (i === right) {

                    printArr[i] = newArr[i] - 1;
                } else {

                    printArr[i] = printArr[i-1] - 1;
                }
            }

            for (let i = (right + progressiveSecondNums); i < printArr.length; i++) {

                printArr[i] = newArr[i] + 1;
            }
            console.log(printArr.join(" "));

            newArr = printArr;
            printArr = [];
            printArr.length = newArr.length;
            progressiveSecondNums += 2;
            right -= 1;

        }

        }

        
    }
}

demo(5, 5);