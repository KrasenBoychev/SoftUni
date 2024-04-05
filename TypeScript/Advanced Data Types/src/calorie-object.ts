function calorieObject(fruits: Array<string>): void {
    let fruitObj: any = {};

    for (let i: number = 0; i < fruits.length; i += 2) {
       fruitObj[fruits[i]] = Number(fruits[i + 1]);
    }

    return fruitObj;
}

console.log(calorieObject(['Potato', '93', 'Skyr', '63',

'Cucumber', '18', 'Milk', '42']));

