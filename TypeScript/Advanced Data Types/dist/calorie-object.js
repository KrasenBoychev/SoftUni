"use strict";
function calorieObject(fruits) {
    let fruitObj = {};
    for (let i = 0; i < fruits.length; i += 2) {
        fruitObj[fruits[i]] = Number(fruits[i + 1]);
    }
    return fruitObj;
}
console.log(calorieObject(['Potato', '93', 'Skyr', '63',
    'Cucumber', '18', 'Milk', '42']));
//# sourceMappingURL=calorie-object.js.map