type fruitObj = {
    [key: string]: number
}

const fruits: fruitObj = {};

function calorieObject(input: Array<string>): fruitObj {

    for (let i: number = 0; i < input.length; i += 2) {
       fruits[input[i]] = Number(input[i + 1]);
    }

    return fruits;
}

console.log(calorieObject(['Potato', '93', 'Skyr', '63',

'Cucumber', '18', 'Milk', '42']));

