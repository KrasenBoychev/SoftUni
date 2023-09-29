
//   let  = Number(input[]);
//   let  = input[];


function orbit(inputArr) {

    let width = inputArr[0];
    let height = inputArr[1];
    let y = inputArr[2];
    let x = inputArr[3];

    let topPart = [];
    let count = 0;

    for (let rows = 0; rows <= y; rows++) {

        let newArr = [];
        let num = 0;

        let repeat = rows;
        count = 0;

        for (let i = 0; i <= x; i++) {

            if (i === 0) {

                num = rows + 1;
                newArr.push(num);
            } else {

                while (count < repeat) {

                    if (newArr.length <= (x + 1)) {

                        newArr.unshift(num);
                        count++;
                        i++;
                    } else {
                        break;
                    }

                }

                if (newArr.length >= (x + 1)) {
                    continue;
                }

                newArr.unshift(num + 1);
                num++;
            }
        }

        num = rows + 1;
        count = 0;
        for (let i = 0; i < (width - x - 1); i++) {

            while (count < repeat) {
                if (newArr.length < width) {

                    newArr.push(num);
                    count++;
                    i++;
                } else {
                    break;
                }
            }

            if (newArr.length >= width) {
                continue;
            }

            newArr.push(num + 1);
            num++;

        }

        topPart.push(newArr);
    }

    for (let i = topPart.length - 1; i >= 0; i--) {

        console.log(topPart[i].join(" "));
    }


    //BOTTOM PART 

    for (let rows = 1; rows < (height - y); rows++) {

        let newArr = [];
        let num = 0;

        let repeat = rows;
        count = 0;

        for (let i = 0; i <= x; i++) {

            if (i === 0) {

                num = rows + 1;
                newArr.push(num);
            } else {

                while (count < repeat) {

                    if (newArr.length <= (x + 1)) {

                        newArr.unshift(num);
                        count++;
                        i++;
                    } else {
                        break;
                    }

                }

                if (newArr.length >= (x + 1)) {
                    continue;
                }

                newArr.unshift(num + 1);
                num++;
            }
        }

        num = rows + 1;
        count = 0;
        for (let i = 0; i < (width - x - 1); i++) {

            while (count < repeat) {
                if (newArr.length < width) {

                    newArr.push(num);
                    count++;
                    i++;
                } else {
                    break;
                }
            }

            if (newArr.length >= width) {
                continue;
            }

            newArr.push(num + 1);
            num++;

        }

        console.log(newArr.join(" "));
    }

}


orbit([7, 7, 3, 2])

// console.log(``);