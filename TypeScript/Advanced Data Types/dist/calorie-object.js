"use strict";
const fruits = {};
function calorieObject(input) {
    for (let i = 0; i < input.length; i += 2) {
        fruits[input[i]] = Number(input[i + 1]);
    }
    return fruits;
}
console.log(calorieObject(['Potato', '93', 'Skyr', '63',
    'Cucumber', '18', 'Milk', '42']));
//# sourceMappingURL=calorie-object.js.map